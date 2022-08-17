import { useEffect, useState } from "react";
import ProductRate from "../../Atoms/ProductRate";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const req = await fetch("./product.json");
      const res = await req.json();
      const data = res.product;
      setProducts(data);
    };
    getProduct();
  }, []);

  return (
    <div>
      {products.map(product => {
        return (
          <div className="product-item" key={product.productId}>
            <img src={product.productImage} alt={product.productName} />
            <h3 className="product-name">{product.productName}</h3>
            <div>
              <div className="rate">
                <ProductRate value={product.productRate} />
              </div>
            </div>
            <span className="product-stock">{product.productStock}</span>
            <span className="product-price">{product.productPrice}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
