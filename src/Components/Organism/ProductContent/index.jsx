import ListProduct from '../../Molecules/ListProduct';
import ProductHeader from '../ProductHeader';

const ProductContent = () => {
  return (
    <div className='container product-wrapper'>
      <ProductHeader />
      <ListProduct />
    </div>
  );
};

export default ProductContent;
