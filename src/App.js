import { useEffect, useState } from "react";
import "./App.css";
import Student from "./components/Students";
import "./styles/style.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "./components/AddButton";

function App() {
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState([]);
  useEffect(() => {
    fetch("toDo.json")
      .then((res) => res.json())
      .then((res) => {
        setStudents(res.students);
        saveStuds(res.students);
      });
  }, []);

  function AddingStudent(e) {
    setStudents([...students, e]);
  }
  function deleteStudent(e) {
    setStudents(
      students.filter((student) => {
        return e.name !== student.name;
      })
    );
  }

  function removeUser(name) {
    setStudents(students.filter((student) => student.name !== name));
  }
  let arr = [];
  function saveStuds(props) {
    // debugger;
    props.map((prop) => {
      arr = [...arr, prop.score];
    });
  }

  // console.log(scores);
  return (
    <>
      <div className="students">
        <Header totalStudents={students.length} />
        {students.map((student, index) => {
          return (
            <Student
              data={student}
              key={index}
              getStud={deleteStudent}
              removeUser={removeUser}
            />
          );
        })}
        <div>
          <AddStudent studentInfo={AddingStudent} />
        </div>
      </div>
    </>
  );
}

export default App;
