import React from "react";
import { FACULTY_DATA } from "./facultyData";

function Dashboard({ students = [] }) {
  // Unique counts derived from data
  const totalStudents = students.length;
  const totalFaculty = FACULTY_DATA.length;
  const totalDepartments = new Set(FACULTY_DATA.map((f) => f.department)).size;
  const totalCourses = new Set(FACULTY_DATA.map((f) => f.course)).size;

  return (
    <div className="container container-box mt-4">
      <h2 className="text-primary fw-bold text-center mb-3">Dashboard</h2>
      <p className="text-center text-secondary mb-4">
        Welcome to Student Management System
      </p>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>👨‍🎓</h1>
              <h2 className="fw-bold text-primary">{totalStudents}</h2>
              <h5>Total Students</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>🏫</h1>
              <h2 className="fw-bold text-success">{totalDepartments}</h2>
              <h5>Departments</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>📚</h1>
              <h2 className="fw-bold text-warning">{totalCourses}</h2>
              <h5>Courses</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>👨‍🏫</h1>
              <h2 className="fw-bold text-danger">{totalFaculty}</h2>
              <h5>Faculty</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;