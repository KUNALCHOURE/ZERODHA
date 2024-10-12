import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedmenu, setselectedmenu] = useState(0);

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
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
