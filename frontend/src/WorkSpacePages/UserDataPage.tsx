import Sidebar from "../Sidebar";
import "../Workspace.css";

function UserDataPage() {
  return (
    <>
      <Sidebar />
      <div className="main">
        {/* <!-- MY DATA --> */}
        <div className="page-block visible" id="page-mydata">
          <div className="page-head">
            <h1>my data</h1>
            <button className="btn btn-coral">+ add entry</button>
          </div>

          <div className="stat-grid">
            <div className="card">
              <p className="label">this month spent</p>
              <p className="value">$1,658</p>
            </div>
            <div className="card">
              <p className="label">left to spend</p>
              <p className="value">$842</p>
            </div>
            <div className="card">
              <p className="label">entries</p>
              <p className="value">27</p>
            </div>
          </div>

          <div className="card table-card">
            <div className="table-row head">
              <span>description</span>
              <span>category</span>
              <span>date</span>
              <span style={{ textAlign: "right" }}>amount</span>
            </div>
            <div className="table-row">
              <span className="row-desc">
                <span
                  className="row-icon"
                  style={{
                    background: "var(--sage-bg)",
                    color: "var(--sage-deep)",
                  }}
                >
                  🛒
                </span>
                whole foods
              </span>
              <span style={{ color: "var(--gray)" }}>groceries</span>
              <span style={{ color: "var(--gray)" }}>sep 2</span>
              <span className="amount-neg">-$64.20</span>
            </div>
            <div className="table-row">
              <span className="row-desc">
                <span
                  className="row-icon"
                  style={{
                    background: "var(--amber-bg)",
                    color: "var(--amber)",
                  }}
                >
                  ☕
                </span>
                blue bottle coffee
              </span>
              <span style={{ color: "var(--gray)" }}>dining out</span>
              <span style={{ color: "var(--gray)" }}>sep 2</span>
              <span className="amount-neg">-$6.50</span>
            </div>
            <div className="table-row">
              <span className="row-desc">
                <span
                  className="row-icon"
                  style={{ background: "var(--blue-bg)", color: "var(--blue)" }}
                >
                  🚗
                </span>
                uber ride
              </span>
              <span style={{ color: "var(--gray)" }}>transport</span>
              <span style={{ color: "var(--gray)" }}>sep 1</span>
              <span className="amount-neg">-$14.80</span>
            </div>
            <div className="table-row">
              <span className="row-desc">
                <span
                  className="row-icon"
                  style={{
                    background: "var(--purple-bg)",
                    color: "var(--purple)",
                  }}
                >
                  💼
                </span>
                freelance payment
              </span>
              <span style={{ color: "var(--gray)" }}>income</span>
              <span style={{ color: "var(--gray)" }}>sep 1</span>
              <span className="amount-pos">+$450.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDataPage;
