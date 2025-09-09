import { useContext } from "react";
import { CartContext } from "../utils/contexts";

function Links(){

  const { cartItems } = useContext(CartContext);

  return (

    <>
    
      <nav>

        <ul>

          <li>{`Unique Item(s) in Cart: ${cartItems.length}`}</li>
          <li>{`Total Item(s) in Cart: ${cartItems.reduce((totalCartItemCount, cartItem) => totalCartItemCount + cartItem.count, 0)}`}</li>

        </ul>

      </nav>

      <hr></hr>
    
    </>
  );
}

export function Header() {

  return (

    <div id="header">
    
      <h2>Random Header</h2>
      <Links />      

    </div>
  );
}