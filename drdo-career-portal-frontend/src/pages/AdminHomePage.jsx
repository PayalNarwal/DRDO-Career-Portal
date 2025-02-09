import NavBar from "../components/NavBar";
import Header from "../components/Header";
import JobPositions from "../components/JobPositions";
import Footer from "../components/Footer";
import AdminJobTable from "../components/AdminJobTable";

const AdminHomePage = () => {
  return (
    <>
      <NavBar />
      <header
        className="relative bg-cover bg-center h-96 flex justify-start px-8 mb-6 text-white"
        style={{
          backgroundImage: 'url("../../public/drdo-bg-banner.jpg")', // Path to your background image
        }}
      >
        <div className="mt-10 p-4 rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}">
            Welcome to the Admin Portal
          </h1>
          <p className="mt-4 text-lg md:text-xl">Edit, Create or Delete Job Posts</p>
        </div>
      </header>
      <AdminJobTable />
      <Footer />
    </>
  );
};

export default AdminHomePage;
