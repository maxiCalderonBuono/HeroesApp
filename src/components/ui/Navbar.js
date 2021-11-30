import { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import { NavbarIcon } from "./NavbarIcon";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const setNavbar = () => {
    if (window.innerWidth >= 768) {
      setClick(false);
    } 
  };

  useEffect(() => {
    setClick();
  }, []);

  window.addEventListener('resize', setNavbar);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/">
        <img
          className="navbar-logo d-inline-block align-top ms-3"
          src="assets/images/mainLogo.png"
          alt="webpage main logo"
        />
      </Link>


      <div className="navbar-toggler navbar-toggler-right">
        <NavbarIcon setClick={setClick} click={click} />
      </div>

    

      <div
        className={click ? "collapse.show col-12" : "collapse navbar-collapse"}
      >
        <div className="navbar-nav fs-5">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" + (isActive ? " active" : "")
            }
            to="/marvel"
            onClick={() => setClick(!click)}
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" + (isActive ? " active" : "")
            }
            to="/dc"
            onClick={() => setClick(!click)}
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" + (isActive ? " active" : "")
            }
            to="/search"
            onClick={() => setClick(!click)}
          >
            Search
          </NavLink>
        </div>

        <div
          className={
            click
              ? "collapse.show col-12"
              : "collapse navbar-collapse d-flex justify-content-end"
          }
        >
          <div className="navbar-nav fs-5">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-info text-center">
                Maxi
              </span>
              <button className="nav-item nav-link btn fs-5" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

