import { ADD_TO_CART } from "./actionTypes";

const initialState = {

  cartItems: [],
  products: [
          
    { name: "Product 1", description: "This is a random description of the EPICNESS of Product 1. There's nothing like it. Grab it now!" },
    { name: "Product 2", description: "This is a random description of the EPICNESS of Product 2. There's nothing like it. Grab it now!" },
    { name: "Product 3", description: "This is a random description of the EPICNESS of Product 3. There's nothing like it. Grab it now!" },
    { name: "Product 4", description: "This is a random description of the EPICNESS of Product 4. There's nothing like it. Grab it now!" },
    { name: "Product 5", description: "This is a random description of the EPICNESS of Product 5. There's nothing like it. Grab it now!" },
    { name: "Product 6", description: "This is a random description of the EPICNESS of Product 6. There's nothing like it. Grab it now!" },
    { name: "Product 7", description: "This is a random description of the EPICNESS of Product 7. There's nothing like it. Grab it now!" },
    { name: "Product 8", description: "This is a random description of the EPICNESS of Product 8. There's nothing like it. Grab it now!" }

  ]
};

const cartReducer = (state = initialState, action) => {
  
  let itemCount = 0, cartItems = [], quantityIncreased = false;
  
  switch(action.type){
 
    case ADD_TO_CART: 
      
      state.cartItems.forEach((prevItem) => {

        itemCount = prevItem.count;

        if(prevItem.name === action.newCartItem.name && prevItem.description === action.newCartItem.description){
          
          itemCount++;
          quantityIncreased = true;
        }

        cartItems.push({ name: prevItem.name, description: prevItem.description, count: itemCount });
      });

      if(!quantityIncreased)
        cartItems.push({ name: action.newCartItem.name, description: action.newCartItem.description, count: 1 });

      return { products: state.products, cartItems: cartItems};

    default: return state;
  }
};

export default cartReducer;