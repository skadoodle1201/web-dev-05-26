import { useSelector } from "react-redux";

export default function Header() {
  const cartCount = useSelector((state) => state.cart.totalCartProducts);

  return (
    <div>
      <div>Store</div>
      <div>
        <p>Cart: {cartCount}</p>
      </div>
    </div>
  );
}
