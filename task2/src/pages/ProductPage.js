import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddButton } from "../components/AddButton";
import Loader from "../components/Loader";
import { setProductAction } from "../store/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .catch(() => navigate("/a"))
        .then((data) => dispatch(setProductAction(data)));
    });
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
        <AddButton
          id={product.id}
          title={product.title}
          price={product.price}
        />
      </div>
    </div>
  );
};
