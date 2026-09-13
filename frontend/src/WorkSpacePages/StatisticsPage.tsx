import Sidebar from "../Sidebar";
import "../Workspace.css";

function StatisticsPage() {
  return (
    <>
      <Sidebar />
      <div className="main">
        {/* <!-- STATISTICS --> */}
        <div className="page-block visible" id="page-statistics">
          <div className="page-head">
            <h1>statistics</h1>
          </div>

          <div className="two-col">
            <div className="card chart-card">
              <p
                className="label"
                style={{ fontSize: 13, color: "var(--gray)", marginBottom: 4 }}
              >
                spending, last 6 months
              </p>
              <div className="chart-bars">
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{ height: "55%" }}></div>
                  <span className="chart-label">apr</span>
                </div>
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{ height: "70%" }}></div>
                  <span className="chart-label">may</span>
                </div>
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{ height: "45%" }}></div>
                  <span className="chart-label">jun</span>
                </div>
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{ height: "80%" }}></div>
                  <span className="chart-label">jul</span>
                </div>
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{ height: "60%" }}></div>
                  <span className="chart-label">aug</span>
                </div>
                <div className="chart-bar-wrap">
                  <div
                    className="chart-bar this-month"
                    style={{ height: "68%" }}
                  ></div>
                  <span className="chart-label">sep</span>
                </div>
              </div>
            </div>

            <div className="card">
              <p
                className="label"
                style={{ fontSize: 13, color: "var(--gray)", marginBottom: 14 }}
              >
                by category
              </p>
              <div className="category-list">
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--sage-deep)" }}
                  ></span>
                  <span className="cat-name">groceries</span>
                  <span className="cat-amount">$310</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--amber)" }}
                  ></span>
                  <span className="cat-name">dining out</span>
                  <span className="cat-amount">$180</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--blue)" }}
                  ></span>
                  <span className="cat-name">transport</span>
                  <span className="cat-amount">$95</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--purple)" }}
                  ></span>
                  <span className="cat-name">subscriptions</span>
                  <span className="cat-amount">$42</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--coral)" }}
                  ></span>
                  <span className="cat-name">other</span>
                  <span className="cat-amount">$65</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-grid" style={{ marginTop: 20 }}>
            <div className="card">
              <p className="label">avg. daily spend</p>
              <p className="value">$55.30</p>
            </div>
            <div className="card">
              <p className="label">vs. last month</p>
              <p className="value" style={{ color: "var(--sage-deep)" }}>
                -12%
              </p>
            </div>
            <div className="card">
              <p className="label">top category</p>
              <p className="value">groceries</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatisticsPage;
