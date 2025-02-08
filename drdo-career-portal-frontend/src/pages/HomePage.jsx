import NavBar from "../components/NavBar";
import Header from "../components/Header";
import JobPositions from "../components/JobPositions";
import Footer from "../components/Footer";
import JobTable from "../components/JobTable";

const HomePage = () => {  
  return (
    <>
      <NavBar />
      <Header />
      <JobPositions />
      <JobTable />
      <Footer />
    </>
  );
};

export default HomePage;
