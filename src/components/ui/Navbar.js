import { useState, useEffect, useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import "animate.css";
import { NavbarIcon } from "./NavbarIcon";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import mainLogo from "../../assets/images/mainLogo.png"

export const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext);

  const [click, setClick] = useState(false);

  const setNavbar = () => {
    if (window.innerWidth >= 768) {
      setClick(false);
    }
  };

  useEffect(() => {
    setClick();
  }, []);

  window.addEventListener("resize", setNavbar);

  const navigate = useNavigate();

  const handleLogout = () => {
    
    const action = {
      type: types.logout,
    }

    dispatch(action);

    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/">
        <img
          className="navbar-logo d-inline-block align-top ms-3"
          src= {mainLogo}
          alt="webpage main logo"
        />
      </Link>

      <div className="navbar-toggler navbar-toggler-right me-3">
        <NavbarIcon setClick={setClick} click={click} />
      </div>

      <div
        className={click ? "collapse.show col-12" : "collapse navbar-collapse"}
      >
        <div className="navbar-nav fs-5">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center " +
              (isActive ? " active" : "") +
              (click
                ? " animate__animated animate__fadeInLeft animate__fast"
                : "")
            }
            to="/marvel"
            onClick={() => (click ? setClick(!click) : setClick(click))}
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" +
              (isActive ? " active" : "") +
              (click
                ? " animate__animated animate__fadeInRight animate__fast"
                : "")
            }
            to="/dc"
            onClick={() => (click ? setClick(!click) : setClick(click))}
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link text-center" +
              (isActive ? " active" : "") +
              (click
                ? " animate__animated animate__fadeInLeft animate__fast"
                : "")
            }
            to="/search"
            onClick={() => (click ? setClick(!click) : setClick(click))}
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
              <span
                className={
                  "nav-item nav-link text-info text-center" +
                  (click
                    ? " animate__animated animate__fadeInRight animate__fast"
                    : "")
                }
              >{"Hola " + user.name + "!"}</span>
              <button
                className={
                  "nav-item nav-link btn fs-5" +
                  (click
                    ? " animate__animated animate__fadeInLeft animate__fast"
                    : "")
                }
                onClick={handleLogout}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
