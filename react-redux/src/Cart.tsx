import { useSelector } from "react-redux";
import { IState } from "./store";
import { ICartItem } from "./store/modules/cart/types";

const Cart = () => {
  const cartItems = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Quantidade</td>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Cart;