import React from "react";
import logo from "../../../../images/my-teachable-badge.svg";

const SidebarNav = () => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <a className="logo-wrapper" href="/profile">
          <img className="logo" src={logo} alt="My teachable badge" />
        </a>
        <div className="user-info">
          <a href="/profile/edit">
            <img
              width="100"
              height="100"
              className="avatar"
              src="https://s.gravatar.com/avatar/7a861af6d4418a1f48bff42a22cf8466?d=mm"
              alt="7a861af6d4418a1f48bff42a22cf8466?d=mm"
            />
          </a>
          <h2>lena</h2>
          <p>llena0964@gmail.com</p>
        </div>
      </div>

      <ul className="nav nav-sidebar">
        <li className="nav-item-profile selected">
          <a href="/profile">My Schools</a>
        </li>
        <li className="nav-item-create">
          <a href="/schools/new">Create New School</a>
        </li>
        <li className="nav-item-settings">
          <a href="/profile/edit">Settings</a>
        </li>
        <li className="nav-item-billing">
          <a href="/billing">Billing</a>
        </li>
        <li className="nav-item-help">
          <a id="my_teachable_help_form" href="/tickets/new">
            Help
          </a>
        </li>
        <li className="nav-item-logout">
          <a href="/sign_out">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNav;
