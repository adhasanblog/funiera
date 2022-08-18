import { useEffect, useState } from 'react';
import ProductRate from '../../Atoms/ProductRate';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const req = await fetch('./product.json');
      const res = await req.json();
      const data = res.product;
      setProducts(data);
    };
    getProduct();
  }, []);

  return (
    <div className='product'>
      {products.map((product) => {
        return (
          <div className='product-item' key={product.productId}>
            <div className='product-item-image'>
              <img src={product.productImage} alt={product.productName} />
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5 0C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0H5ZM13.7499 8.75C13.7499 8.05964 14.3096 7.5 14.9999 7.5C15.6903 7.5 16.2499 8.05964 16.2499 8.75V13.75H21.25C21.9404 13.75 22.5 14.3096 22.5 15C22.5 15.6904 21.9404 16.25 21.25 16.25H16.2499V21.25C16.2499 21.9404 15.6903 22.5 14.9999 22.5C14.3096 22.5 13.7499 21.9404 13.7499 21.25V16.25H8.75C8.05964 16.25 7.5 15.6904 7.5 15C7.5 14.3096 8.05964 13.75 8.75 13.75H13.7499V8.75Z'
                  fill='#D38669'
                />
              </svg>
            </div>
            <div className='product-item-desc'>
              <h3 className='product-name'>{product.productName}</h3>
              <div className='product-item-rating-sell'>
                <div className='rate'>
                  <ProductRate value={product.productRate} />
                </div>
                <span className='product-sell'>{`(${product.productSell} Sell)`}</span>
              </div>
              <span className='product-price'>{`Rp. ${product.productPrice}`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
