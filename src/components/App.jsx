import { useState } from "react"
import { Header } from "./Header"
import { Product } from "./Product";

function App() {

  const [ count, setCount ] = useState(0);

  return (
    <>
      <Header count={count} />
      <Product products={[
        
        { increaseCount: setCount, name: "Product 1", description: "This is a random description of the EPICNESS of Product 1. There's nothing like it. Grab it now!" },
        { increaseCount: setCount, name: "Product 2", description: "This is a random description of the EPICNESS of Product 2. There's nothing like it. Grab it now!" },
        { increaseCount: setCount, name: "Product 3", description: "This is a random description of the EPICNESS of Product 3. There's nothing like it. Grab it now!" },
        { increaseCount: setCount, name: "Product 4", description: "This is a random description of the EPICNESS of Product 4. There's nothing like it. Grab it now!" }
        
      ]} />

    </>
  )
}

export default App