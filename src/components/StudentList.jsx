import React from "react";
import { getFacultyByCourse } from "./facultyData";

function StudentList({ students, editStudent, deleteStudent }) {
  return (
    <div className="container container-box mt-4">
      <h3 className="text-primary fw-bold mb-4">👨‍🎓 Student List</h3>

      <table className="table table-bordered table-hover align-middle">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Course</th>
            <th>Assigned Faculty</th>
            <th className="text-center" style={{ width: "180px" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.course}</td>
                <td>
                  <span className="badge bg-info text-dark">
                    {getFacultyByCourse(student.course)}
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No Students Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;