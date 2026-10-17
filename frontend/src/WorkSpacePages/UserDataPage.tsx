import Sidebar from "../Sidebar";
import "../Workspace.css";
import AddEntryDialog from "../AddEntryDialog";
import { useState, useEffect } from "react";
import axios from "axios";

type UserData = {
  id: number;
  description: string;
  amount: number;
  categoryName: string | null;
  date: string;
  type: number;
};

type DashboardSummary = {
  spentThisMonth: number;
  leftToSpend: number;
  entriesThisMonth: number;
};

function UserDataPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [data, setData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get<UserData[]>(
        "http://localhost:5277/userFinance",
        { withCredentials: true },
      );
      setData(response.data);
    } catch (err) {
      setData([]);
      console.error("Error fetching user entries:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUserData = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5277/deleteEntry/${id}`, {
        withCredentials: true,
      });
      setData((currentData) => currentData.filter((entry) => entry.id !== id));
      await fetchSummary();
    } catch (err) {
      console.error("Error deleting user entry:", err);
    }
  };

  const fetchSummary = async () => {
    try {
      const response = await axios.get<DashboardSummary>(
        "http://localhost:5277/dashboard-summary",
        { withCredentials: true },
      );
      setSummary(response.data);
    } catch (err) {
      console.error("Error fetching dashboard summary:", err);
    }
  };

  const refreshData = async () => {
    await Promise.all([fetchUserData(), fetchSummary()]);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="main">
        {/* <!-- MY DATA --> */}
        <div className="page-block visible" id="page-mydata">
          <div className="page-head">
            <h1>my data</h1>
            <button
              type="button"
              className="btn btn-coral"
              onClick={() => setIsDialogOpen(true)}
            >
              + add entry
            </button>
          </div>

          <div className="stat-grid">
            <div className="card">
              <p className="label">this month spent</p>
              <p className="value">
                {summary ? `$${summary.spentThisMonth.toFixed(2)}` : "$0.00"}
              </p>
            </div>
            <div className="card">
              <p className="label">left to spend</p>
              <p className="value">
                {summary ? `$${summary.leftToSpend.toFixed(2)}` : "$0.00"}
              </p>
            </div>
            <div className="card">
              <p className="label">entries</p>
              <p className="value">{summary ? summary.entriesThisMonth : 0}</p>
            </div>
          </div>

          <div className="card table-card">
            <div className="table-row head">
              <span>description</span>
              <span>category</span>
              <span>date</span>
              <span style={{ textAlign: "right" }}>amount</span>
              <span />
            </div>
            {isLoading ? (
              <div className="table-row">loading...</div>
            ) : data.length === 0 ? (
              <div className="table-row">no entries yet</div>
            ) : (
              data.map((entry) => {
                const isIncome = entry.type === 1;

                return (
                  <div className="table-row" key={entry.id}>
                    <span className="row-desc">
                      <span
                        className="row-icon"
                        style={{
                          background: isIncome
                            ? "var(--sage-bg)"
                            : "var(--amber-bg)",
                          color: isIncome ? "var(--sage-deep)" : "var(--amber)",
                        }}
                      >
                        {isIncome ? "+" : "-"}
                      </span>
                      {entry.description}
                    </span>
                    <span style={{ color: "var(--gray)" }}>
                      {entry.categoryName ?? (isIncome ? "income" : "expense")}
                    </span>
                    <span style={{ color: "var(--gray)" }}>
                      {new Date(`${entry.date}T00:00:00`).toLocaleDateString()}
                    </span>
                    <span className={isIncome ? "amount-pos" : "amount-neg"}>
                      {isIncome ? "+" : "-"}${Math.abs(entry.amount).toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="deletebtn"
                      onClick={() => void deleteUserData(entry.id)}
                      aria-label={`Delete ${entry.description}`}
                    >
                      delete
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <AddEntryDialog
          onClose={() => setIsDialogOpen(false)}
          onSave={refreshData}
        />
      )}
    </>
  );
}

export default UserDataPage;
