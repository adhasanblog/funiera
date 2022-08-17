import Navbar from "../../Components/Organism/Navbar";
import Header from "../../Layouts/Header";
import "../../Assets/Style.css";
import Main from "../../Layouts/Main";
import BannerLandingPage from "../../Components/Organism/BannerLandingPage";
import OurCollections from "../../Components/Organism/OurCollections";

const LandingPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <BannerLandingPage />
        <OurCollections />
      </Main>
    </>
  );
};

export default LandingPage;
