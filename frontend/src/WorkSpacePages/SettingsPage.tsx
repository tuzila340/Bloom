import Sidebar from "../Sidebar";
import "../Workspace.css";
import axios from "axios";
import { useEffect, useState } from "react";

type Profile = {
  username: string;
  email: string;
};

function SettingsPage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5277/user-profil-data",
        {
          withCredentials: true,
        },
      );
      setProfile(response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        setProfile(null);
      } else {
        console.error("Error fetching profile:", err.message);
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="main">
        {/* <!-- SETTINGS --> */}
        <div className="page-block visible" id="page-settings">
          <div className="page-head">
            <h1>settings</h1>
          </div>

          <div className="avatar-row">
            <div className="avatar"></div>
            <div>
              <p style={{ fontWeight: 600, margin: 0 }}>
                {profile?.username ?? "Loading..."}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--gray)",
                  margin: "2px 0 0",
                }}
              >
                {profile?.email ?? "Loading..."}
              </p>
            </div>
            <button className="btn btn-outline" style={{ marginLeft: "auto" }}>
              edit profile
            </button>
          </div>

          <div className="settings-section">
            <h3>account</h3>
            <div className="settings-row">
              <div>
                <p className="label">connected bank accounts</p>
                <p className="desc">2 accounts linked</p>
              </div>
              <button className="btn btn-outline">manage</button>
            </div>
            <div className="settings-row">
              <div>
                <p className="label">currency</p>
                <p className="desc">usd ($)</p>
              </div>
              <button className="btn btn-outline">change</button>
            </div>
          </div>

          <div className="settings-section">
            <h3>notifications</h3>
            <div className="settings-row">
              <div>
                <p className="label">budget limit alerts</p>
                <p className="desc">nudge me before I hit a category limit</p>
              </div>
              <div className="toggle">
                <div className="knob"></div>
              </div>
            </div>
            <div className="settings-row">
              <div>
                <p className="label">weekly summary</p>
                <p className="desc">email recap every monday</p>
              </div>
              <div className="toggle off">
                <div className="knob"></div>
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h3>plan</h3>
            <div className="settings-row">
              <div>
                <p className="label">current plan</p>
                <p className="desc">bloom plus — $6/month</p>
              </div>
              <button className="btn btn-outline">manage plan</button>
            </div>
          </div>

          <div className="settings-section">
            <h3>account actions</h3>
            <div className="settings-row">
              <div>
                <p className="label" style={{ color: "var(--coral)" }}>
                  delete account
                </p>
                <p className="desc">this can't be undone</p>
              </div>
              <button className="btn btn-outline">delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
