function handleClick(product){

  product.addToCart((prevItems) => {
    
    let itemCount = 0, cartItems = [], quantityIncreased = false;

    prevItems.forEach((prevItem) => {

      itemCount = prevItem.count;

      if(prevItem.name === product.name && prevItem.description === product.description){
        
        itemCount++;
        quantityIncreased = true;
      }

      cartItems.push({ name: prevItem.name, description: prevItem.description, count: itemCount });
    });

    if(!quantityIncreased)
      cartItems.push({ name: product.name, description: product.description, count: 1 });

    return cartItems;
  });
}

function Product({ product }){

  return (

    <div className="product">
    
      <h4>{`${product.name}`}</h4>
      <p>{`${product.description}`}</p>

      <button onClick={() => handleClick(product)}>Add to Cart</button>
    
    </div>
  );
}

export function Products(props){

  return (

    <div id="products">
      {props.products.map((product, index) => <Product key={index} product={product} />)}
    
    </div>
  );
}