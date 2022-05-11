import { useContext } from "react";
import { GlobalData } from "./Level1";

const Level3 = () => {
  const { state } = useContext(GlobalData);
  const { actions } = useContext(GlobalData);
  const onClick = () => {
    actions.setAge(state.age + 1); // level 3 컴포넌트에서 age 변경
  };
  return (
    <div>
      <h3>name: {state.name}</h3>
      <h3>age: {state.age}</h3>
      <button onClick={onClick}>context age 증가</button>
    </div>
  );
};
export default Level3;
