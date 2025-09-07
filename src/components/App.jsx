import { useState } from "react";

import { Header } from "./Header";
import { Products } from "./Products";

function calculateTotalCartItemCount(cartItems){ 
  return cartItems.reduce((totalCartItemCount, cartItem) => totalCartItemCount + cartItem.count, 0);
}

function App() {

  const [ cartItems, setCartItems ] = useState([{ name: "Placeholder Item", description: "Placeholder Description", count: 1 }]);
  console.log(cartItems);

  const products = [
        
    { addToCart: setCartItems, name: "Product 1", description: "This is a random description of the EPICNESS of Product 1. There's nothing like it. Grab it now!" },
    { addToCart: setCartItems, name: "Product 2", description: "This is a random description of the EPICNESS of Product 2. There's nothing like it. Grab it now!" },
    { addToCart: setCartItems, name: "Product 3", description: "This is a random description of the EPICNESS of Product 3. There's nothing like it. Grab it now!" },
    { addToCart: setCartItems, name: "Product 4", description: "This is a random description of the EPICNESS of Product 4. There's nothing like it. Grab it now!" }

  ];

  return (
    
    <>
    
      <Header cartUniqueItemCount={cartItems.length} totalCartItemCount={calculateTotalCartItemCount(cartItems)} />
      <Products products={products} />

    </>
  );
}

export default App