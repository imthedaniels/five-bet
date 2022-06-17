import Banner from "../../Components/Privacy/Banner/index";
import img from "../../Assets/banner-bg.png";
import TermsCond from "../../Components/Privacy/Privacy";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Privacy = () => {
  return (
    <>
      <Header />
      <Banner text={"Privacy"} imgUrl={img} />
      <TermsCond />
      <Footer />
    </>
  );
};

export default Privacy;
