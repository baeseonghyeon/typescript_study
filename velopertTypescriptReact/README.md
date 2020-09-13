# [리액트 프로젝트에서 타입스크립트 사용하기](https://react.vlpt.us/using-typescript/)

1. **[타입스크립트 연습](./ts-practice)**
   > - TypeScript 를 사용하면 이렇게 특정 변수 또는 상수의 타입을 지정 할 수 있고 우리가 사전에 지정한 타입이 아닌 값이 설정 될 때 바로 에러를 발생시킵니다.
   > - `tsc`명령어로 컴파일 하지만 에러가 나타났을땐 컴파일이 되지 않습니다.
2. **[리액트 컴포넌트 타입스크립트로 작성하기](./ts-react-tutorial)**
   > `npx create-react-app ts-react-tutorial --typescript`
   >
   > - 위와 같이 뒤에 `--typescript` 가 있으면 타입스크립트 설정이 적용된 프로젝트가 생성됩니다.
3. **[타입스크립트로 리액트 상태 관리하기](./ts-react-tutorial)**
   > - 타입스크립트로 `useState`와 `useReducer`를 사용하여 상태를 관리해 봅니다.
4. **[TypeScript 와 Context API 활용하기](./ts-react-tutorial)**
   > - State를 위한 Context 를 만들고, Dispatch를 위한 Context를 만듭니다. 그리고, 해당 Context에서 관리하고 있는 값을 쉽게 조회할 수 있도록 커스텀 Hooks 을 작성합니다.
5. **[TypeScript 에서 리덕스 프로처럼 사용하기](./ts-react-redux-tutorial)**
   > - TypeScript 에서 리덕스를 사용한 이후 `typesafe-actions`로 프로처럼 리팩토링 하기.
6. **[타입스크립트에서 리덕스 미들웨어 사용하기 (redux-thunk, redux-saga)](./ts-react-redux-tutorial-middleware)**
