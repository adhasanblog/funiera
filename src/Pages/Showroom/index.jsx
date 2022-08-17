import Navbar from "../../Components/Organism/Navbar";
import Header from "../../Layouts/Header";
import "../../Assets/Style.css";
import Main from "../../Layouts/Main";

const Showroom = () => {
  document.title = "FuniEra | Showroom";
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main></Main>
    </>
  );
};

export default Showroom;
