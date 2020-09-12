import React from "react";
import Greetings from "./Greetings";
// import Counter from "./Counter";
import Counter from "./CounterReducer";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

// Context API 활용하기
import ContextReducerSample from "./ContextReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name="Hello" onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <ReducerSample />
      <hr />
      <SampleProvider>
        <ContextReducerSample />
      </SampleProvider>
    </>
  );
}

export default App;
