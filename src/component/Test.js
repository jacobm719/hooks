import React, { useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

const Test = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // what: function, 2 arguments(function, array), no return
  // why: hooks mimics lifecycle method
  // how: componentDidMount, componentDidUpdate, componentWillUnmount, with or without dependency array difference
  //   useEffect(() => {
  //     console.log("componentDidMount");
  //     // const interval = setInterval(() => {
  //     //   console.log(1);
  //     // }, 1000);
  //     // return () => {
  //     //   clearInterval(interval);
  //     // };
  //   }, []);
  //   useEffect(() => {
  //     console.log(
  //       "componentDidUpdate, componentDidMount triggered by counter1 state"
  //     );
  //   }, [counter1]);
  //   useEffect(() => {
  //     console.log(
  //       "componentDidUpdate, componentDidMount triggered by counter2 state"
  //     );
  //   }, [counter2]);
  //   useEffect(() => {
  //     console.log(
  //       "componentDidUpdate, componentDidMount triggered by counter1 or counter2 state"
  //     );
  //     return () => {
  //       console.log("componentWillUnmount1");
  //     };
  //   }, [counter1, counter2]);

  //   useEffect(() => {
  //     // componentDidUpdate, componentDidMount
  //     console.log("triggered by every rendering");
  //     return () => {
  //       console.log("componentWillUnmount2");
  //     };
  //   });

  useEffect(() => {
    console.log(1);
  }, [counter1]);
  console.log(2);
  useEffect(() => {
    console.log(3);
  });
  useEffect(() => {
    console.log(4);
  }, []);
  const handleClick1 = () => {
    console.log(5);
    setCounter1((prev) => prev + 1);
    console.log(6);
  };
  const handleClick2 = () => {
    setCounter2((prev) => prev + 1);
  };
  console.log("render");
  return (
    <>
      <div>
        {counter1}
        <button onClick={handleClick1}>increment1</button>
      </div>
      <div>
        {counter2}
        <button onClick={handleClick2}>increment2</button>
      </div>
    </>
  );
};

export default Test;
