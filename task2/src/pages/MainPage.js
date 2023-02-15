import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AddButton } from "../components/AddButton";
import Loader from "../components/Loader";

export const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);
  if (products.length === 0) return <Loader />;
  return (
    <div className="mainPage">
      {products.map((product) => {
        return (
          <div className="card">
            <img
              src={product.category.image}
              style={{ width: "200px", borderRadius: "5px" }}
              alt=""
            />
            <Link key={product.id} to={`/products/${product.id}`}>
              {product.title}
            </Link>
            <div>Цена: {product.price}$</div>
            <AddButton product={product} />
          </div>
        );
      })}
    </div>
  );
};
