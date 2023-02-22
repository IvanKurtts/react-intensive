import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddButton } from "../components/AddButton";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../store/reducers/productsReducer";
import { fetchProduct } from "../store/reducers/asyncActions/asyncGetProducts";
import { productsSelector } from "../store/selectors/selectors";
import { setProductAction } from "../store/reducers/productsReducer";

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading } = useSelector(productsSelector);

  const goBack = () => {
    dispatch(setProductAction(""));
    navigate(-1);
  };

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchProduct(id, navigate));
  }, [id]);

  if (loading) return <Loader />;
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
