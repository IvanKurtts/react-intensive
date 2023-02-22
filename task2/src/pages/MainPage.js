import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getMoreProductsAction } from "../store/reducers/productsReducer";
import { fetchProducts } from "../store/reducers/asyncActions/asyncGetProducts";
import { productsSelector } from "../store/selectors/selectors";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { products, limit, loading } = useSelector(productsSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts(limit, navigate));
  }, [limit]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="mainPage">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
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
