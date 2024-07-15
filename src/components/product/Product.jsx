import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";


const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    }

    fetchProductById();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="productContent">
      <div className="productImage">
        <img
          className="prdctImg"
          src={product.image_url}
          alt={product.product_name}
        />
      </div>
      <div className="productTxt">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <strong>{product.price}</strong>
      </div>
    </div>
  );
};

export default Product;
