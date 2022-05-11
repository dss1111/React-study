import { useReducer } from "react";
const testReducer = (state, action) => {
  if (action.type === "1") {
    //action의 type에 따라 다른 state 리턴
    let nextList = [...state.list];
    nextList.push(state.name + "의 아들");
    return {
      name: state.name + "의 아들",
      number: state.number + 1,
      list: nextList
    };
  } else if (action.type === "2") {
    let nextList = [...state.list];
    nextList.push(state.name + "의 딸");
    return {
      name: state.name + "의 딸",
      number: state.number + 1,
      list: nextList
    };
  } else if (action.type === "3") {
    let nextList = [...state.list];
    nextList.push(state.name + "의 친구");
    return {
      name: state.name + "의 친구",
      number: state.number + 1,
      list: nextList
    };
  } else {
  }
};
const App = () => {
  // 사용할 state, state륿 변경할 dispatch를 넣고 리듀서, 초기상태를 설정
  const [state, dispatch] = useReducer(testReducer, {
    name: "나",
    number: 1,
    list: ["나"]
  });

  return (
    <div>
      <h1> {state.name} </h1>
      <h1> 총원: {state.number} </h1>
      <button
        onClick={() => {
          dispatch({ type: "1" });
        }}
      >
        {" "}
        아들추가
      </button>
      <button
        onClick={() => {
          dispatch({ type: "2" });
        }}
      >
        {" "}
        딸추가
      </button>
      <button
        onClick={() => {
          dispatch({ type: "3" });
        }}
      >
        {" "}
        고양이추가
      </button>
      {state.list.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </div>
  );
};
export default App;
