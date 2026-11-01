import { useMemo, useState } from "react";

function Products({ products, search }) {
  const [dark, setDark] = useState(false);
  const visible = useMemo(() => {
    console.log("RAN MEMO", products, search);
    return products.filter((p) => {
      if (search)
        return p?.title?.toLowerCase()?.includes(search.toLowerCase());
      else return p;
    });
  }, [products, search]);
  console.log("RERENDER PRODUCTS");

  return (
    <div style={{ backgroundColor: dark ? "red" : "white" }}>
      <button onClick={() => setDark((d) => !d)}>Change theme</button>
      <ul>
        {visible.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
