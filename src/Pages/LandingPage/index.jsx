import Navbar from "../../Components/Organism/Navbar";
import Header from "../../Layouts/Header";
import "../../Assets/Style.css";
import Main from "../../Layouts/Main";
import BannerLandingPage from "../../Components/Organism/BannerLandingPage";
import OurCollections from "../../Components/Organism/OurCollections";
import CustomFurniture from "../../Components/Organism/CustomFurniture";
import CustomersTestimonials from "../../Components/Organism/CustomersTestimonials";
import Footer from "../../Layouts/Footer/Footer";
import Service from "../../Components/Organism/Service";

const LandingPage = () => {
  document.title = "FuniEra | Solusi untuk Perlengkapan Rumah Anda";
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <BannerLandingPage />
        <OurCollections />
        <CustomFurniture />
        <CustomersTestimonials />
      </Main>
      <Footer>
        <Service />
      </Footer>
    </>
  );
};

export default LandingPage;
