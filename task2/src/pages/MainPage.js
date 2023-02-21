import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getMoreProductsAction,
  setLoading,
  setProductsAction,
} from "../store/reducers/productsReducer";

export const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const limit = useSelector((state) => state.products.limit);
  const loading = useSelector((state) => state.products.loading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(() => {
      fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((res) => res.json())
        .catch(() => navigate("/a"))
        .then((data) => dispatch(setProductsAction(data)));
    });
    if (products.length > 0) {
      dispatch(setLoading());
    }
  });

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
          <button onClick={() => dispatch(getMoreProductsAction())}>
            Загрузить больше товаров
          </button>
        </div>
      )}
    </>
  );
};
