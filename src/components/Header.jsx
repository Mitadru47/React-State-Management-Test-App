function Links({ uniqueCartItemCount, totalCartItemCount }){

  return (

    <>
    
      <nav>

        <ul>

          <li>{`Unique Item(s) in Cart: ${uniqueCartItemCount}`}</li>
          <li>{`Total Item(s) in Cart: ${totalCartItemCount}`}</li>

        </ul>

      </nav>

      <hr></hr>
    
    </>
  );
}

export function Header({ uniqueCartItemCount, totalCartItemCount }) {

  return (

    <div id="header">
    
      <h2>Random Header</h2>
      <Links uniqueCartItemCount={uniqueCartItemCount} totalCartItemCount={totalCartItemCount} />      

    </div>
  );
}