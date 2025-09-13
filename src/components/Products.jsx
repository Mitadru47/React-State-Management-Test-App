import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";

function Product({ product }){

  const dispatch = useDispatch();

  return (

    <div className="product">
    
      <h4>{`${product.name}`}</h4>
      <p>{`${product.description}`}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    
    </div>
  );
}

export function Products(){

  const products = useSelector((state) => state.products);

  return (

    <div id="products"> 
      {products.map((product, index) => <Product key={index} product={product} />)}
    
    </div>
  );
}