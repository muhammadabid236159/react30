import { useState } from "react";
import Login from "./components/loginapp";
import Form from "./components/form";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
     < Login/>
     <Form/>
    </>
  );
}

export default App;