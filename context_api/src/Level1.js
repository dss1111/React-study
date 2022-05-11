import { useState } from "react";
import React from "react";
import Level2 from "./Level2";

export const GlobalData = React.createContext(null);

const Level1 = () => {
  const [name, setName] = useState("context name");
  const [age, setAge] = useState(1);

  const value = {
    state: { name, age },
    actions: { setName, setAge }
  };
  const onClick = () => {
    setAge(age + 1);
  };
  return (
    <GlobalData.Provider value={value}>
      <div>
        <h1>name: {name}</h1>
        <h1>age: {age}</h1>
        <button onClick={onClick}>level1</button>
        <Level2 />
      </div>
    </GlobalData.Provider>
  );
};
export default Level1;
