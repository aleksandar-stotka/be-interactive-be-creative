import "./Sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../assets/add_icon.svg";
import Avatar from "./Avatar";
import { useAuthContext } from "../hooks/useAuthContext";

function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
          
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashborad" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={DashboardIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
