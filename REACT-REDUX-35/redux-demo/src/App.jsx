import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Header />
      <hr />
      <ProductCard name={"keyboard"} price={2000} />
      <ProductCard name={"mouse"} price={3000} />

      <hr />
      <Cart />
    </>
  );
}

export default App;
