function Links({ cartUniqueItemCount, totalCartItemCount }){

  return (

    <>
    
      <nav>

        <ul>

          <li>Option 1</li>
          <li>Option 2</li>

          <li>{`Unique Item(s) in Cart: ${cartUniqueItemCount}`}</li>
          <li>{`Total Item(s) in Cart: ${totalCartItemCount}`}</li>

        </ul>

      </nav>
    
    </>
  );
}

export function Header({ cartUniqueItemCount, totalCartItemCount }) {

  return (

    <>
    
      <h2>Random Header</h2>
      <Links cartUniqueItemCount={cartUniqueItemCount} totalCartItemCount={totalCartItemCount} />      

    </>
  );
}