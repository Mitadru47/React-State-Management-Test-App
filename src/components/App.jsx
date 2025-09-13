import { Header } from "./Header";
import { Products } from "./Products";

import store from "../redux/store";
import { Provider } from "react-redux";

function App() {

  return (
    
    <>
    
      <Provider store={store}>

        <Header />
        <Products />
  
      </Provider>

    </>
  );
}

export default App