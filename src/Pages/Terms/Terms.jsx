import Banner from "../../Components/Terms/Banner/index";
import img from "../../Assets/banner-bg.png";
import TermsCond from "../../Components/Terms/Terms";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
const Terms = () => {
  return (
    <>
      <Header />
      <Banner text={"Terms Conditions"} imgUrl={img} />
      <TermsCond />
      <Footer />
    </>
  );
};

export default Terms;
