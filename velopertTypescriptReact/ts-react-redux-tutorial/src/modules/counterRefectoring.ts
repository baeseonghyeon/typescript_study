import {
  createStandardAction,
  ActionType,
  createReducer,
} from "typesafe-actions";

// 메서드 체이닝 형태로 구현하여 타입을 선언할 필요가 없음,
// type 대신에 생성 함수를 참조하여 리듀서를 구현을 해주면 모든 액션 객체들의 타입인 CounterAction 을 준비하는것도 생략 할 수 있습니다.

// // 액션 타입 선언
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";
// const INCREASE_BY = "counter/INCREASE_BY";

// // 액션 생성함수 선언
// export const increase = createStandardAction(INCREASE)();
// export const decrease = createStandardAction(DECREASE)();
// export const increaseBy = createStandardAction(INCREASE_BY)<number>(); // payload 타입을 Generics 로 설정해주세요.

// // 액션 객체 타입 준비
// const actions = { increase, decrease, increaseBy }; // 모든 액션 생성함수들을 actions 객체에 넣습니다.
// type CounterAction = ActionType<typeof actions>; // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있습니다.

// 액션에 생성함수 선언
export const increase = createStandardAction("counter/INCREASE")();
export const decrease = createStandardAction("counter/DECREASE")();
export const increaseBy = createStandardAction("counter/INCREASE_BY")<number>(); // payload 타입을 Generics 로 설정해주세요.

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다.
type CounterState = {
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0,
};

// 리듀서를 작성합니다.
// createReducer 는 리듀서를 쉽게 만들 수 있게 해주는 함수입니다.
// Generics로 리듀서에서 관리할 상태, 그리고 리듀서에서 처리 할 모든 액션 객체들의 타입을 넣어야합니다.
// const counter = createReducer<CounterState, CounterAction>(initialState)
//   .handleAction(INCREASE, (state) => ({ count: state.count + 1 }))
//   .handleAction(DECREASE, (state) => ({ count: state.count - 1 }))
//   .handleAction(INCREASE_BY, (state, action) => ({
//     count: state.count + action.payload,
//   }));

// 리듀서를 작성합니다.
// 상태의 타입은 initialState 를 참조하여 바로 유추 할 수 있고,
// 액션 객체의 타입은 액션 생성함수를 참조하여 유추 할 수 있기 때문에 Generics를 생략해도 무방합니다.
const counter = createReducer(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter;
