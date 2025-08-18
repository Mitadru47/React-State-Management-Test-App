function handleClick(increaseCount){

  increaseCount((prevCount) => prevCount + 1);
}

export function Product(props){

  return (

    <>
    
      <h4>{`Product: ${props.products[0].name}`}</h4>
      <p>{`Description: ${props.products[0].description}`}</p>

      <button onClick={() => handleClick(props.products[0].increaseCount)}>Add to Cart</button>
    
    </>
  );
}