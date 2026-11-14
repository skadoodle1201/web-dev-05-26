import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.product);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const setPrd = () => {
      const prdList = [];
      for (const prd in cartProducts) {
        prdList.push({
          name: prd,
          price: cartProducts[prd].price,
          quantity: cartProducts[prd].quantity,
        });
      }
      setProductList(prdList);
    };
    setPrd();
  }, [cartProducts]);

  return (
    <div>
      {productList.map((prd) => {
        return (
          <div>
            <div>
              {prd.name} - {prd.price} * {prd.quantity} ={" "}
              {prd.price * prd.quantity}
            </div>
          </div>
        );
      })}
    </div>
  );
}
