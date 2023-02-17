import { AddButton } from "../components/AddButton";
import { Link } from "react-router-dom";

export const ProductCard = ({image, id, title, price}) => {
    return (
        <div className="card">
          <img
            src={image}
            style={{ width: "200px", borderRadius: "5px" }}
            alt=""
          />
          <Link key={id} to={`/products/${id}`}>
            {title}
          </Link>
          <div>Цена: {price}$</div>
          <AddButton price={price} />
        </div>
      );
}