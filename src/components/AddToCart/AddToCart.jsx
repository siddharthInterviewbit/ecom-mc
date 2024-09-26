import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);


  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  function increment() {
    increaseQuantity(product);
  }

  function decrement() {
    decreaseQuantity(product);
  }
  
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}>Add To Cart</button>
      </div>
    )
    } else {
      return (
        <div className="cart-item">
          <button onClick={decrement}>-</button>
          <span> {quantity} </span>
          <button onClick={increment}>+</button>
        </div>
        )
    }
      
  }
    
export default AddToCart;
    
    // passing of parameters in react is called as props
    // state variable quantity
