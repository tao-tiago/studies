import { useEffect, useState } from "react";
import { IProduct } from "./store/modules/cart/types";

import Cart from "./Cart";
import Product from "./Product";
import api from "./services/api";

const App = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then(response => {
      setCatalog(response.data);
    })
  }, [])

  return (
    <>
      {catalog.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <Cart />
    </>
  )
}

export default App;
