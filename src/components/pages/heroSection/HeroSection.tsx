import Footer from "@/components/layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import Searchbar from "../../layouts/searchbar/Searchbar";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div className="my-40"></div>
      <Searchbar />
      <div className="my-60"></div>
      <Footer />
    </>
  );
};

export default HeroSection;
