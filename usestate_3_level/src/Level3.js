import { useState, useEffect } from "react";

const Level3 = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  useEffect(() => {
    setName(props.name + "2");
    setAge(props.age - 3);
  });
  return (
    <div>
      <h3>name: {name}</h3>
      <h3>age: {age}</h3>
    </div>
  );
};
export default Level3;
