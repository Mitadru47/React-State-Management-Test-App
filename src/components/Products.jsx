import { useContext } from "react";
import { CartContext } from "../utils/contexts";

function Product({ product }){

  const { addToCart } = useContext(CartContext);

  return (

    <div className="product">
    
      <h4>{`${product.name}`}</h4>
      <p>{`${product.description}`}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    
    </div>
  );
}

export function Products(){

  const { products } = useContext(CartContext);

  return (

    <div id="products"> 
      {products.map((product, index) => <Product key={index} product={product} />)}
    
    </div>
  );
}