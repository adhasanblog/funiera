import Navbar from "../../Components/Organism/Navbar";
import Header from "../../Layouts/Header";
import "../../Assets/Style.css";
import Main from "../../Layouts/Main";

const Categories = () => {
  document.title = "FuniEra | Categori Produk";
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main></Main>
    </>
  );
};

export default Categories;
