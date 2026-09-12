import "./Workspace.css";
import { Link, NavLink } from "react-router";

const navItems = [
  { label: "userDataPage", href: "/userDataPage", icon: "☰" },
  { label: "statisticsPage", href: "/statisticsPage", icon: "◔" },
  { label: "planningPage", href: "/planningPage", icon: "◎" },
  { label: "aiHelpPage", href: "/aiHelpPage", icon: "✦" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="brand" aria-label="Bloom home">
        <img src="/favicon.svg" alt="" className="logo-mark" />
        <h4>bloom</h4>
      </Link>
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
  );
}

export default Sidebar;
