import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";

export default function ProductCard({ name, price }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{name}</h3>
      <p> Price : Rs. {price}</p>
      <button
        onClick={() => {
          dispatch(
            addItem({
              name,
              price,
            }),
          );
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
