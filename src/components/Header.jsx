export function Header(props) {

  return (

    <>
    
      <h2>Random Header</h2>

      <nav>

        <ul>

          <li>Option 1</li>
          <li>Option 1</li>

          <li>{`Count: ${props.count}`}</li>

        </ul>

      </nav>

    </>
  );
}