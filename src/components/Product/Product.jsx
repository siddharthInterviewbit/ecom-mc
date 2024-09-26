import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/";
function Product() {
  let [products, setProducts] = useState([]);

  useEffect(function () {
    fetch('https://run.mocky.io/v3/7cf54db5-91cf-4269-892f-8b689a7a5e8e')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProducts(data);
    });
  }, []);


  return (
    <div>
      {products.map((product) => {
        return (<ProductCard product={product} />)
      })}
    </div>
  );
}
  
// function add() {return 3+2};
// function add(a,b) {return a+b}; //parameters
  
export default Product;
  
// Javascript XML 

// if i want the data to be rendered 
// 1) Rerender
// 2) Stop for the data *


// state

// when set they cause rerender 
// for setting a state variable you are provided with a setter function 
// How do I create one ?
// you have something known as hooks  = Helper function (which would be used to do the same thing again and again)
// useState hook to create a state variable


// useEffect
// I will provide you a functin and number of times this  function is called  can be controlled

// function is called only once and not on every rerender if you pass [] dependency array 

// mounting 
// rerendering | rendering
