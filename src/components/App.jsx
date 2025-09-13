import { useState } from "react";

import { Header } from "./Header";
import { Products } from "./Products";

import { CartContext } from "../utils/contexts";

function App() {

  const [ cartItems, setCartItems ] = useState([]);

  const addToCart = (newCartItem) => {

    setCartItems((prevItems) => {
      
      let itemCount = 0, cartItems = [], quantityIncreased = false;

      prevItems.forEach((prevItem) => {

        itemCount = prevItem.count;

        if(prevItem.name === newCartItem.name && prevItem.description === newCartItem.description){
          
          itemCount++;
          quantityIncreased = true;
        }

        cartItems.push({ name: prevItem.name, description: prevItem.description, count: itemCount });
      });

      if(!quantityIncreased)
        cartItems.push({ name: newCartItem.name, description: newCartItem.description, count: 1 });

      return cartItems;
    });
  }

  const products = [
        
    { name: "Product 1", description: "This is a random description of the EPICNESS of Product 1. There's nothing like it. Grab it now!" },
    { name: "Product 2", description: "This is a random description of the EPICNESS of Product 2. There's nothing like it. Grab it now!" },
    { name: "Product 3", description: "This is a random description of the EPICNESS of Product 3. There's nothing like it. Grab it now!" },
    { name: "Product 4", description: "This is a random description of the EPICNESS of Product 4. There's nothing like it. Grab it now!" },
    { name: "Product 5", description: "This is a random description of the EPICNESS of Product 5. There's nothing like it. Grab it now!" },
    { name: "Product 6", description: "This is a random description of the EPICNESS of Product 6. There's nothing like it. Grab it now!" },
    { name: "Product 7", description: "This is a random description of the EPICNESS of Product 7. There's nothing like it. Grab it now!" },
    { name: "Product 8", description: "This is a random description of the EPICNESS of Product 8. There's nothing like it. Grab it now!" }

  ];

  return (
    
    <>
    
      <CartContext value={{ products, cartItems, addToCart }}>

        <Header />
        <Products />

      </CartContext>

    </>
  );
}

export default App