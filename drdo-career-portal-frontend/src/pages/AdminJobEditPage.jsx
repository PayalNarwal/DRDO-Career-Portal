import React from "react";
import NavSimple from "../components/NavSimple";
import ApplyForm from "../components/ApplyForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import UpdateJobForm from "../components/UpdateJobForm";

const AdminJobEditPage = () => {
  return (
    <>
      <NavBar/>
      <UpdateJobForm />
      <Footer />
    </>
  );
};

export default AdminJobEditPage;
