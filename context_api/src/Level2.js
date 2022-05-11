import { useState } from "react";
import Level3 from "./Level3";

const Level2 = () => {
  const [name, setName] = useState("local name");
  const [age, setAge] = useState(100);
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <Level3 />
    </div>
  );
};
export default Level2;
