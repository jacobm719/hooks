import "./App.css";
import React, { useEffect, useState } from "react";
import Test from "./component/Test";

// stateless, functional component

// useState: state manage
// useEffect: lifecycle management

// hooks: is a pattern that allow functional component to have state and lifecycle management

function App() {
  const [isTestVisible, setIsTestVisible] = useState(true);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setIsTestVisible((prev) => !prev);
          }}
        >
          Toggle App
        </button>
        {isTestVisible ? <Test /> : null}
        {/* {isTestVisible&&<Test/>} */}
      </div>
    </>
  );
}

export default App;
