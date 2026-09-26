import React from "react";
import { FACULTY_DATA } from "./facultyData";

function FacultyList() {
  return (
    <div className="container container-box mt-4">
      <h3 className="text-primary fw-bold mb-4">👨‍🏫 Faculty Directory</h3>

      <table className="table table-bordered table-hover align-middle">
        <thead className="table-secondary">
          <tr>
            <th>#</th>
            <th>Faculty Name</th>
            <th>Department</th>
            <th>Assigned Course</th>
          </tr>
        </thead>
        <tbody>
          {FACULTY_DATA.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td className="fw-bold">{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyList;