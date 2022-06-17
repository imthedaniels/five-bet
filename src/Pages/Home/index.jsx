import HowWorks from "../../Components/HowWorks";
import Header from "../../Components/Header";
import About from "../../Components/AboutUs";
import BannerHome from "../../Components/BannerHome";
import HomeStatistics from "../../Components/HomeStatistics";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <BannerHome />
      <About />
      <HowWorks />
      <Footer />
    </>
  );
};

export default Home;
