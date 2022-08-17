import BannerLandingPageRoomCat from "../../Molecules/BannerLandingPageRoomCat";
import BannerLandingPageSlider from "../../Molecules/BannerLandingPageSlider";
import BannerLandingPageText from "../../Molecules/BannerLandingPageText";

const BannerLandingPage = () => {
  return (
    <div className="container banner-lp-wrapper">
      <BannerLandingPageText />
      <BannerLandingPageRoomCat />
      <BannerLandingPageSlider />
    </div>
  );
};

export default BannerLandingPage;
