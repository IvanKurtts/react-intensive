import { setProductsAction, setProductAction } from "../productsReducer";
import { setLoading } from "../productsReducer";

export const fetchProducts = (limit, navigate) => (dispatch) => {
  fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setProductsAction(data));
      dispatch(setLoading(false));
    })
    .catch(() => {
      navigate("/error");
      dispatch(setLoading(false));
    });
};

export const fetchProduct = (id, navigate) => (dispatch) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setProductAction(data));
      dispatch(setLoading(false));
    })
    .catch(() => {
      navigate("/error");
      dispatch(setLoading(false));
    });
};
