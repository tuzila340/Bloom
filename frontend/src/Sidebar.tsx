import { NavLink } from "react-router";
import "./Workspace.css";

const navItems = [
  { label: "my data", href: "/workspace", icon: "☰" },
  { label: "statistics", href: "/statisticsPage", icon: "◔" },
  { label: "planning", href: "/planningPage", icon: "◎" },
  { label: "ai help", href: "/aiHelpPage", icon: "✦" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav-main" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
          >
            <span className="dot" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <nav className="nav-bottom" aria-label="Account navigation">
        <NavLink
          to="/settingsPage"
          className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
        >
          <span className="dot" aria-hidden="true">
            ⚙
          </span>
          settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
