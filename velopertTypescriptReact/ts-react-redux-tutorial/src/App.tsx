import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </>
  );
}

export default App;
