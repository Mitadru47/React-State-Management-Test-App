function Links({ cartUniqueItemCount, totalCartItemCount }){

  return (

    <>
    
      <nav>

        <ul>

          <li>{`Unique Item(s) in Cart: ${cartUniqueItemCount}`}</li>
          <li>{`Total Item(s) in Cart: ${totalCartItemCount}`}</li>

        </ul>

      </nav>

      <hr></hr>
    
    </>
  );
}

export function Header({ cartUniqueItemCount, totalCartItemCount }) {

  return (

    <div id="header">
    
      <h2>Random Header</h2>
      <Links cartUniqueItemCount={cartUniqueItemCount} totalCartItemCount={totalCartItemCount} />      

    </div>
  );
}