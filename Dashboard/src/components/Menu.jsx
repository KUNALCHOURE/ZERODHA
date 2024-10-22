import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedmenu, setselectedmenu] = useState(0);
  const [username, setUsername] = useState("");
  useEffect(() => {
    // Get the username from the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const user = params.get("username");
    if (user) {
      setUsername(user);
    }
  }, []);


  

  const handlemenuclick = (index) => {
    setselectedmenu(index);
  };


  const menuclass = "menu";
  const activemenuclass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handlemenuclick(0)}
            >
              <p className={selectedmenu === 0 ? activemenuclass : menuclass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handlemenuclick(1)}
            >
              <p className={selectedmenu === 1 ? activemenuclass : menuclass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/Holdings"}
              onClick={() => handlemenuclick(2)}
            >
              <p className={selectedmenu === 2 ? activemenuclass : menuclass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/Position"}
              onClick={() => handlemenuclick(3)}
            >
              <p className={selectedmenu === 3 ? activemenuclass : menuclass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/Funds"}
              onClick={() => handlemenuclick(4)}
            >
              <p className={selectedmenu === 4 ? activemenuclass : menuclass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/Actions"}
              onClick={() => handlemenuclick(5)}
            >
              <p className={selectedmenu === 5 ? activemenuclass : menuclass}>
                Actions
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
        <div className="avatar">
          {console.log("dashboard:"+username)}
    {username && username.length > 0 
        ? (username.length === 1 
            ? username[0] // If the username is a single character
            : username[0] + username[1]) // If the username is two or more characters
        : "?" // Default character if username is null or empty
    }
</div>


          <p className="username">{username}</p>

        </div>
      </div>
    </div>
  );
};

export default Menu;
