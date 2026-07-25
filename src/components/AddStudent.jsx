import { useState, useEffect } from "react";

function AddStudent({
  addStudent,
  editStudentData,
  updateStudent
}) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    department: "",
    course: "",
    mobile: "",
    address: "",
    gender: ""
  });

  useEffect(() => {
    if (editStudentData) {
      setStudent(editStudentData);
    }
  }, [editStudentData]);

  function handleChange(e) {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    if (student.name.trim() === "") {
      alert("Please enter student name");
      return;
    }

    if (student.name.trim().length < 3) {
      alert("Name should contain at least 3 characters");
      return;
    }

    if (student.email.trim() === "") {
      alert("Please enter email");
      return;
    }

    if (!student.email.includes("@") || !student.email.includes(".")) {
      alert("Please enter a valid email");
      return;
    }

    if (student.mobile.trim() === "") {
      alert("Please enter mobile number");
      return;
    }

    if (!/^[0-9]{10}$/.test(student.mobile)) {
      alert("Mobile number must contain exactly 10 digits");
      return;
    }

    if (student.department === "") {
      alert("Please select department");
      return;
    }

    if (student.course === "") {
      alert("Please select course");
      return;
    }

    if (student.gender === "") {
      alert("Please select gender");
      return;
    }

    if (editStudentData) {

      updateStudent(student);
      alert("Student Updated Successfully");

    } else {

      addStudent(student);
      alert("Student Added Successfully");

    }

    setStudent({
      name: "",
      email: "",
      department: "",
      course: "",
      mobile: "",
      address: "",
      gender: ""
    });

  }

  return (
    <div className="container container-box mt-4">

      <h3 className="text-primary fw-bold text-center mb-4">
        {editStudentData ? "✏️ Update Student" : "➕ Add Student"}
      </h3>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter Student Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>

          <select
            className="form-select"
            name="department"
            value={student.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
          </select>

        </div>

        <div className="mb-3">
          <label className="form-label">Course</label>

          <select
            className="form-select"
            name="course"
            value={student.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="React">React</option>
            <option value="Django">Django</option>
            <option value="SQL">SQL</option>
          </select>

        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            maxLength="10"
            value={student.mobile}
            onChange={handleChange}
            placeholder="Enter 10 Digit Mobile Number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            rows="3"
            name="address"
            value={student.address}
            onChange={handleChange}
            placeholder="Enter Address"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <br />

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={student.gender === "Male"}
            onChange={handleChange}
          />
          <span className="ms-1">Male</span>

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={student.gender === "Female"}
            onChange={handleChange}
            className="ms-4"
          />
          <span className="ms-1">Female</span>

        </div>

        <button
          type="submit"
          className="btn btn-success me-2 px-4"
        >
          {editStudentData ? "Update Student" : "Save Student"}
        </button>

        <button
          type="reset"
          className="btn btn-danger px-4"
        >
          Reset
        </button>

      </form>

    </div>
  );
}

export default AddStudent;