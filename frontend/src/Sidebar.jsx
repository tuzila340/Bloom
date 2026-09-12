import "./Workspace.css";
import { NavLink } from "react-router";

const navItems = [
  { label: "planningPage", href: "/planningPage", icon: "◎" },
  { label: "statisticsPage", href: "/statisticsPage", icon: "◔" },
  { label: "userDataPage", href: "/userDataPage", icon: "☰" },
  { label: "settingsPage", href: "/settingsPage", icon: "⚙" },
  { label: "aiHelpPage", href: "/aiHelpPage", icon: "✦" },
];

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="nav-main">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="dot">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-bottom">
          <NavLink
            to="/settingsPage"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <span className="dot">⚙</span>settings
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
