import { useState } from "react";

function Student(props) {
  return (
    <div className="student">
      <div>name:{props.data.name} </div>
      <div>score:{props.data.score} </div>
      <button onClick={() => props.removeUser(props.data.name)}>X</button>
    </div>
  );
}

export default Student;
