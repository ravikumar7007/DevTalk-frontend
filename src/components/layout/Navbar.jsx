import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { loggedOut } from "../../reducers/authSlice";
function Navbar() {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const authNav = (
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
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "#17a2b8" : "white",
          })}
        >
          <span className="nav-link">
            <i className="fas fa-user"></i>&nbsp;&nbsp;Dashboard
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#17a2b8" : "white",
          })}
        >
          <span className="nav-link" onClick={() => dispatch(loggedOut())}>
            <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;log out
          </span>
        </NavLink>
      </li>
    </ul>
  );
  const guestNav = (
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
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevTalk
        </Link>
      </h1>
      {!loading && (isAuthenticated ? authNav : guestNav)}
    </nav>
  );
}

export default Navbar;
