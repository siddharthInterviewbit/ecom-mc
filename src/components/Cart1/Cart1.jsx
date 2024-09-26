import { useContext } from "react";
import CartContext from "../../context/CartContext";

function Cart1() {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  console.log(Object.values(cart));
  return (
    <div>
      Cart
      {Object.values(cart).map((c) => {
        return (
        <div className="card">
          <h2>{c.title}</h2>
          <h2>{c.quantity}</h2>
        </div>)

      })}
    </div>
  )

}

export default Cart1;