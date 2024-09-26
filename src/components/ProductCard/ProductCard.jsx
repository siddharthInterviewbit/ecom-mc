import "./ProductCard.css";
import AddToCart from "../AddToCart";
function ProductCard({ product }) {
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <AddToCart product={product}/>
    </div>
  )
}

export default ProductCard;

// passing of parameters in react is called as props
