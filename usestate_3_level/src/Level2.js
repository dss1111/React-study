import { useState, useEffect } from "react";
import Level3 from "./Level3";

const Level2 = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  useEffect(() => {
    setName(props.name);
    setAge(props.age);
  });
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <Level3 age={age} name={name} />
    </div>
  );
};
export default Level2;
