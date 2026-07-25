function Dashboard() {
  return (
    <div className="container container-box mt-4">

      <h2 className="text-primary fw-bold text-center mb-3">
        Dashboard
      </h2>

      <p className="text-center text-secondary mb-4">
        Welcome to Student Management System
      </p>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>👨‍🎓</h1>
              <h2 className="fw-bold text-primary">120</h2>
              <h5>Total Students</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>🏫</h1>
              <h2 className="fw-bold text-success">6</h2>
              <h5>Departments</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>📚</h1>
              <h2 className="fw-bold text-warning">15</h2>
              <h5>Courses</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 h-100">
            <div className="card-body">
              <h1>👨‍🏫</h1>
              <h2 className="fw-bold text-danger">25</h2>
              <h5>Faculty</h5>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;