import { useState } from "react";

import { Header } from "./Header";
import { Products } from "./Products";

function App() {

  const [ cartItems, setCartItems ] = useState([{ name: "Placeholder Item", count: "10" }]);

  const products = [
        
    { increaseCount: setCartItems, name: "Product 1", description: "This is a random description of the EPICNESS of Product 1. There's nothing like it. Grab it now!" },
    { increaseCount: setCartItems, name: "Product 2", description: "This is a random description of the EPICNESS of Product 2. There's nothing like it. Grab it now!" },
    { increaseCount: setCartItems, name: "Product 3", description: "This is a random description of the EPICNESS of Product 3. There's nothing like it. Grab it now!" },
    { increaseCount: setCartItems, name: "Product 4", description: "This is a random description of the EPICNESS of Product 4. There's nothing like it. Grab it now!" }

  ];

  return (
    
    <>
    
      <Header cartItemCount={cartItems.length} />
      <Products products={products} />

    </>
  );
}

export default App