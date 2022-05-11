import { useState } from "react";
import Level2 from "./Level2";
const Level1 = () => {
  const [age, setAge] = useState(10);
  const [name, setName] = useState("kim");
  return (
    <div>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <Level2 age={age} name={name} />
    </div>
  );
};
export default Level1;
