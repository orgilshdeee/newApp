import { useEffect, useState } from "react";
import "./App.css";
import Student from "./components/Students";
import "./styles/style.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "./components/AddButton";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("toDo.json")
      .then((res) => res.json())
      .then((res) => {
        setStudents(res.students);
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
  // let total = 0;
  // students.forEach((e) => (total += e.score));
  // let average = total / students.length;
  function removeUser(name) {
    // debugger;
    setStudents(students.filter((student) => student.name !== name));
  }
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
