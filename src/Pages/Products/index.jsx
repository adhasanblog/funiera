import Navbar from '../../Components/Organism/Navbar';
import Header from '../../Layouts/Header';
import '../../Assets/Style.css';
import Main from '../../Layouts/Main';
import ListProduct from '../../Components/Molecules/ListProduct';
import ProductContent from '../../Components/Organism/ProductContent';

const Product = () => {
  document.title = 'FuniEra | Produk Yang Kami Miliki';
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <ProductContent />
      </Main>
    </>
  );
};

export default Product;
