import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className="nav-link" to="/">
            Óra & Stopperóra
          </NavLink>
          <NavLink className="nav-link" to="/expense">
            Kiadáskezelő
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
