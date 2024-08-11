import { useState } from "react";
import "./style.scss";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      Functional Component
      <h1>{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: </h4>
    </div>
  );
};

export default User;
