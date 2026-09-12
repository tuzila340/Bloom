import Sidebar from "../Sidebar";
import "../Workspace.css";

function PlanningPage() {
  return (
    <>
      <Sidebar />
      <div className="main">
        {/* <!-- PLANNING --> */}
        <div className="page-block visible" id="page-planning">
          <div className="page-head">
            <h1>planning</h1>
            <button className="btn btn-coral">+ new goal</button>
          </div>

          <div className="card goal-card">
            <div className="goal-top">
              <h3>emergency fund</h3>
              <span className="goal-amt">$2,400 / $5,000</span>
            </div>
            <div className="goal-track">
              <div className="goal-fill" style={{ width: "48%" }}></div>
            </div>
            <p className="goal-sub">
              on track — estimated to reach goal by feb 2027
            </p>
          </div>

          <div className="card goal-card">
            <div className="goal-top">
              <h3>trip to japan</h3>
              <span className="goal-amt">$540 / $2,000</span>
            </div>
            <div className="goal-track">
              <div className="goal-fill" style={{ width: "27%" }}></div>
            </div>
            <p className="goal-sub">
              a little behind pace — add $85/mo to hit your date
            </p>
          </div>

          <div className="card goal-card">
            <div className="goal-top">
              <h3>new laptop</h3>
              <span className="goal-amt">$1,100 / $1,200</span>
            </div>
            <div className="goal-track">
              <div className="goal-fill" style={{ width: "92%" }}></div>
            </div>
            <p className="goal-sub">almost there — nice work 🌱</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanningPage;
