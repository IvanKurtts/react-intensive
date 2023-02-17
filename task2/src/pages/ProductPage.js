import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddButton } from "../components/AddButton";
import Loader from "../components/Loader";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .catch(() => navigate("/a"))
      .then(setProduct);
  }, []);

  if (!product) return <Loader />;
  return (
    <div className="productPage">
      <div>
        <img
          src={product.image}
          style={{ width: "50%", borderRadius: "5px", marginLeft: "25%" }}
          alt=""
        />
        <div className="productName">
          <h2>{product.title}</h2>
          <h2>{product.price}$</h2>
        </div>
        <div className="description">{product.description}.</div>
        <button className="backButton" onClick={goBack}>
          Назад
        </button>
        <AddButton price={product.price} />
      </div>
    </div>
  );
};
