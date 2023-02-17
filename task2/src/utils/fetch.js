import { useNavigate } from "react-router-dom";



export const getProduct = (value, set) => {
    const navigate = useNavigate();
    fetch(`https://fakestoreapi.com/products${value}`)
    .then((res) => res.json())
    .catch(() => navigate("/a"))
    .then(set);
}