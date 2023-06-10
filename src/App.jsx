import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstStep from "./components/FirstStep";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App" style={{}}>
        <FirstStep />
      </div>
    </>
  );
}

export default App;
