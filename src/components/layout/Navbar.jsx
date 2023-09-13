import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevTalk
        </Link>
      </h1>
      <ul>
        <li>
          <NavLink
            to="/profiles"
            style={({ isActive }) => ({
              color: isActive ? "#17a2b8" : "white",
            })}
          >
            <span className="nav-link">Developers</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            style={({ isActive }) => ({
              color: isActive ? "#17a2b8" : "white",
            })}
          >
            <span className="nav-link">Register</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? "#17a2b8" : "white",
            })}
          >
            <span className="nav-link">Login</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
