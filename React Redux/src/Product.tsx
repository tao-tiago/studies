import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "./store";
import { addProductToCartRequest } from "./store/modules/cart/actions";
import { IProduct } from "./store/modules/cart/types";

interface IProductItem {
  product: IProduct
}

const Product: React.FC<IProductItem> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch])

  const hasFailedStockCheck = useSelector<IState, boolean>(state => (
    state.cart.failedStockCheck.includes(product.id)
  ));

  return (
    <li key={product.id}>
      <strong>{product.title}</strong> {" - "}
      {product.price} {" "}
      <button
        type="button"
        onClick={() => handleAddProductToCart(product)}
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{ color: "red" }}>Falhou</span>}
    </li>
  )
}

export default Product