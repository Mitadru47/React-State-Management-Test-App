function handleClick(increaseCount){
  increaseCount((prevCount) => prevCount + 1);

}

function Product({ product }){

  return (

    <>
    
      <h4>{`${product.name}`}</h4>
      <p>{`${product.description}`}</p>

      <button onClick={() => handleClick(product.increaseCount)}>Add to Cart</button>
    
    </>
  );
}

export function Products(props){

  return (

    <>
      {props.products.map((product, index) => <Product key={index} product={product} />)}
    
    </>
  );
}