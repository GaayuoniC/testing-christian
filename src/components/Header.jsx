import "./Header.css";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-container-text">
        <h1>Learning and Living</h1>
      </div>
      <div className="header-container-nav">
        <NavLink to="/homepage">
          <li>Home</li>
        </NavLink>
        <NavLink to="/history">
          <li>History</li>
        </NavLink>
        <NavLink to="/gallery">
          <li>Gallery</li>
        </NavLink>
        <NavLink to="/tourism">
          <li>Tourism</li>
        </NavLink>
      </div>
    </div>
  );
}
