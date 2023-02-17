import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import Loader from "../components/Loader";

export const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => res.json())
      .catch(() => navigate("/a"))
      .then(setProducts);
    if (products.length > 0) {
      setLoading(false);
    }
  });

  const downloadProducts = () => {
    setLimit(limit + 5);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="mainPage">
        {products.map((product) => {
          return (
            <ProductCard
              image={product.image}
              id={product.id}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
      {limit < 20 && (
        <div className="load-more-btn">
          <button onClick={downloadProducts}>Загрузить больше товаров</button>
        </div>
      )}
    </>
  );
};
