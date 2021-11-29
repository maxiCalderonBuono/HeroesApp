import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import { NavbarIcon } from "./NavbarIcon";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container d-flex justify-content-start col-7">
        <Link className="navbar-brand" to="/">
          <img
            className="navbar-logo d-inline-block align-top"
            src="assets/images/mainLogo.png"
            alt="webpage main logo"
          />
        </Link>
      </div>

      <div className="container d-flex justify-content-end col-5">
        <NavbarIcon setClick={setClick} click={click} />
      </div>

      <div className={click ? "collapse.show col-12" : "collapse navbar-collapse col-12"}>
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" + (isActive ? " active" : "")
            }
            to="/marvel"
            onClick= {() => setClick(!click)}
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" + (isActive ? " active" : "")
            }
            to="/dc"
            onClick= {() => setClick(!click)}
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" + (isActive ? " active" : "")
            }
            to="/search"
            onClick= {() => setClick(!click)}
          >
            Search
          </NavLink>

          <div className={click ? "collapse.show col-12" : "collapse col-12"}>
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-info text-center">Maxi</span>
              <button className="nav-item nav-link btn" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>

      
    </nav>
  );
};
