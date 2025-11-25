import Footer from "@/components/layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import Searchbar from "../../layouts/searchbar/Searchbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-20"></div>
      <Searchbar />
      <div className="h-100"></div>
      <Footer />
    </>
  );
};

export default Home;
