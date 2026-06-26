import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">

      <h1>Welcome Back 👋</h1>

      <p className="dashboard-subtitle">
        Here's your wellness overview for today.
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>📅 Next Period</h3>
          <p>12 July 2026</p>
        </div>

        <div className="dashboard-card">
          <h3>😊 Today's Mood</h3>
          <p>Happy</p>
        </div>

        <div className="dashboard-card">
          <h3>💧 Water Intake</h3>
          <p>5 / 8 Glasses</p>
        </div>

        <div className="dashboard-card">
          <h3>📖 Journal</h3>
          <p>1 Entry Today</p>
        </div>

      </div>

      <h2 className="quick-title">
        Quick Actions
      </h2>

      <div className="quick-actions">

        <button>📅 Period</button>

        <button>😊 Mood</button>

        <button>💧 Water</button>

        <button>📖 Journal</button>

      </div>

    </section>
  );
}

export default Dashboard;