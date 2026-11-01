import { useEffect, useState } from "react";
import "./App.css";
import Products from "./ProductListing";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (products.length == 0) {
      const setProductList = async () => {
        const data = await fetchProducts();
        setProducts(data);
      };

      setProductList();
    }
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value.trim());
        }}
      />
      {products && <Products products={products} search={search} />}
    </>
  );
}

export default App;
