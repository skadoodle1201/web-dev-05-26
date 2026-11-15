import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, reduceItem } from "../slices/cartSlice";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.product);
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

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
      {productList.map((prd, idx) => {
        return (
          <div key={idx}>
            <div>
              {prd.name} - {prd.price} * {prd.quantity} ={" "}
              {prd.price * prd.quantity}
              <button
                onClick={() => {
                  dispatch(
                    addItem({
                      name: prd.name,
                      price: prd.price,
                    }),
                  );
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  dispatch(
                    reduceItem({
                      name: prd.name,
                    }),
                  );
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  dispatch(
                    deleteItem({
                      name: prd.name,
                    }),
                  );
                }}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
