function Product({ product, addToCart }){

  return (

    <div className="product">
    
      <h4>{`${product.name}`}</h4>
      <p>{`${product.description}`}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    
    </div>
  );
}

export function Products({ products, addToCart }){

  return (

    <div id="products"> 
      {products.map((product, index) => <Product key={index} product={product} addToCart={addToCart} />)}
    
    </div>
  );
}