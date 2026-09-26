// src/facultyData.js

export const FACULTY_DATA = [
  { id: 1, name: "Dr. Sharma", department: "MCA", course: "Python" },
  { id: 2, name: "Prof. Kumar", department: "BCA", course: "Java" },
  { id: 3, name: "Prof. Das", department: "MCA", course: "React" },
  { id: 4, name: "Dr. Roy", department: "B.Tech", course: "Data Structures" },
];

// Helper to look up assigned Faculty by Course name
export const getFacultyByCourse = (courseName) => {
  const match = FACULTY_DATA.find((item) => item.course === courseName);
  return match ? match.name : "N/A";
};