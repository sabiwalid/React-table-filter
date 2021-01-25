import { useEffect, useState } from "react";
import ProductsTable from "./Components/ProductsTable";
import { fetchProducts } from "./utils";

// lifecycle of a component
// 1. mounted (to fetch data)
// 2. updated
// 3. unmounted (clean up)

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // we fetch our products
    fetchProducts()
      .then((data) => {
        // we set the data to the state
        setProducts(data.products);
      })
      // we catch the error in case we have any
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "1.5rem" }}>
      <ProductsTable products={products} />
    </div>
  );
}

export default App;
