import { useState } from 'react';
import './App.css';
import Product from './components/Product/';
import CartContext from './context/CartContext';
import Cart1 from './components/Cart1/';

function App() {
  let [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {...product, quantity: 0}
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
    // setCart
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
    // if(newCart[product.id] === 1) { delete newCart[product.id]} else { newCart[product.id] -=1}
  }

  return (
    <CartContext.Provider value={{cart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
        <Product />
        <Cart1 />
      </div>
    </CartContext.Provider>

  );
}

export default App;


// cart = {}
// cart = {1: {title: x, price: 10, quantity: 1},2: {title: x, price: 10, quantity: 1} , 

//  4: {title: x, price: 10, quantity: 1}}