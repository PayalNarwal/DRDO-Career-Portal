if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const Admin = require("./models/admin");
const userRouter = require("./routes/user.js");
const adminRouter = require("./routes/admin.js");

const dbUrl = process.env.ATLASDB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function main() {
    await mongoose.connect(dbUrl);
}
main()
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: { secret: process.env.SECRET },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => console.log("Session store error", err));

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// Passport setup for users
passport.use("user-local", new LocalStrategy(User.authenticate()));
passport.serializeUser((user, done) =>
    done(null, { id: user.id, type: "User" })
);
passport.deserializeUser(async (obj, done) => {
    if (obj.type === "User") {
        const user = await User.findById(obj.id);
        done(null, user);
    }
});

// Passport setup for admins
passport.use("admin-local", new LocalStrategy(Admin.authenticate()));
passport.serializeUser((admin, done) =>
    done(null, { id: admin.id, type: "Admin" })
);
passport.deserializeUser(async (obj, done) => {
    if (obj.type === "Admin") {
        const admin = await Admin.findById(obj.id);
        done(null, admin);
    }
});

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
