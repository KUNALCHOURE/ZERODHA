import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [username, setUsername] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Get the username from the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const user = params.get("username");
    if (user) {
      setUsername(user);
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    console.log("Navigate to Profile");
    // Add your profile navigation logic here
  };

  const handleLogoutClick = () => {
    console.log("Logout");
   window.location.href=("http://localhost:5173/login");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/Holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/Position"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/Funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
        
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar" onClick={toggleDropdown}>
            {console.log("dashboard:" + username)}
            {username && username.length > 0
              ? username.length === 1
                ? username[0] // If the username is a single character
                : username[0] + username[1] // If the username is two or more characters
              : "?"}
          </div>

          <p className="username">{username}</p>

          {/* Dropdown for Profile and Logout */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={handleProfileClick}>Profile</button>
              <button onClick={handleLogoutClick}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
