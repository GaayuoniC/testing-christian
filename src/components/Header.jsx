import "./Header.css";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-container-text">
        <h1>Living and Learning</h1>
      </div>

      <div className="header-container-nav">
        <NavLink to="/homepage" className="nav-link">
          <li>Home</li>
        </NavLink>
        <NavLink to="/history" className="nav-link">
          <li>History</li>
        </NavLink>
        <NavLink to="/gallery" className="nav-link">
          <li>Gallery</li>
        </NavLink>
        <NavLink to="/tourism" className="nav-link">
          <li>Tourism</li>
        </NavLink>
      </div>
    </div>
  );
}
