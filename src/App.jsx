import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    setNum(num - 1);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incNum}>increment</button>
            <button onClick={decNum}>decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
