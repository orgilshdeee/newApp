import RemoveButton from "./RemoveButton";

function Student(props) {
  function getStudent(e) {
    props.getStud(e);
  }

  return (
    <div className="student">
      <div>name:{props.data.name} </div>
      <div>score:{props.data.score} </div>
      <div>gender:{props.data.gender} </div>
      <div>country:{props.data.country}</div>
      <button onClick={() => props.removeUser(props.data.name)}>X</button>
    </div>
  );
}

export default Student;
