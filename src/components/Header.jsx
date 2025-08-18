function Links({ cartItemCount }){

  return (

    <>
    
      <nav>

        <ul>

          <li>Option 1</li>
          <li>Option 2</li>

          <li>{`Count: ${cartItemCount}`}</li>

        </ul>

      </nav>
    
    </>
  );
}

export function Header({ cartItemCount }) {

  return (

    <>
    
      <h2>Random Header</h2>
      <Links cartItemCount={cartItemCount} />      

    </>
  );
}