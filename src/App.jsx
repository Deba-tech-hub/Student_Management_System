import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import FacultyList from "./components/FacultyList";

function App() {
  const [students, setStudents] = useState([
    {
      id: 101,
      name: "Rahul Kumar",
      department: "MCA",
      course: "Python",
    },
    {
      id: 102,
      name: "Priya Sharma",
      department: "BCA",
      course: "Java",
    },
    {
      id: 103,
      name: "Amit Das",
      department: "MCA",
      course: "React",
    },
  ]);

  const [editStudentData, setEditStudentData] = useState(null);
  const [page, setPage] = useState("home");

  function addStudent(newStudent) {
    const studentData = {
      ...newStudent,
      id: students.length + 101,
    };

    setStudents([...students, studentData]);
    setPage("students");
  }

  function editStudent(student) {
    setEditStudentData(student);
    setPage("add");
  }

  function updateStudent(updatedStudent) {
    const updatedList = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );

    setStudents(updatedList);
    setEditStudentData(null);
    setPage("students");
  }

  function deleteStudent(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      const updatedStudents = students.filter(
        (student) => student.id !== id
      );

      setStudents(updatedStudents);
      alert("Student Deleted Successfully");
    }
  }

  return (
    <>
      <Navbar setPage={setPage} />

      {/* Home Page */}
      {page === "home" && (
        <div className="container text-center mt-5">
          <h2 className="mb-5 fw-bold">
            Welcome to Student Management System
          </h2>

          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <div
                className="card shadow p-4 home-card"
                onClick={() => setPage("dashboard")}
                style={{ cursor: "pointer" }}
              >
                <h1>📊</h1>
                <h4>Dashboard</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card shadow p-4 home-card"
                onClick={() => setPage("students")}
                style={{ cursor: "pointer" }}
              >
                <h1>👨‍🎓</h1>
                <h4>Students</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card shadow p-4 home-card"
                onClick={() => setPage("faculty")}
                style={{ cursor: "pointer" }}
              >
                <h1>👨‍🏫</h1>
                <h4>Faculty</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card shadow p-4 home-card"
                onClick={() => {
                  setEditStudentData(null);
                  setPage("add");
                }}
                style={{ cursor: "pointer" }}
              >
                <h1>➕</h1>
                <h4>Add Student</h4>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard View */}
      {page === "dashboard" && (
        <>
          <div className="container mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => setPage("home")}
            >
              ⬅ Back Home
            </button>
          </div>

          <Dashboard students={students} />
        </>
      )}

      {/* Students View */}
      {page === "students" && (
        <>
          <div className="container mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => setPage("home")}
            >
              ⬅ Back Home
            </button>
          </div>

          <StudentList
            students={students}
            editStudent={editStudent}
            deleteStudent={deleteStudent}
          />
        </>
      )}

      {/* Faculty Directory View */}
      {page === "faculty" && (
        <>
          <div className="container mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => setPage("home")}
            >
              ⬅ Back Home
            </button>
          </div>

          <FacultyList />
        </>
      )}

      {/* Add / Edit Student View */}
      {page === "add" && (
        <>
          <div className="container mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => setPage("home")}
            >
              ⬅ Back Home
            </button>
          </div>

          <AddStudent
            addStudent={addStudent}
            editStudentData={editStudentData}
            updateStudent={updateStudent}
          />
        </>
      )}
    </>
  );
}

export default App;