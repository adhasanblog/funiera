import Navbar from "../../Components/Organism/Navbar";
import Header from "../../Layouts/Header";
import "../../Assets/Style.css";
import Main from "../../Layouts/Main";

const Product = () => {
  document.title = "FuniEra | Produk Yang Kami Miliki";
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main></Main>
    </>
  );
};

export default Product;
