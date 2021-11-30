import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import { useForm } from "../../hooks/useForm";
import mainLogo from "../../assets/images/mainLogo.png";

export const Loginpage = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const [values, handleInputChange] = useForm("");

  const { userName } = values;

  const handleClick = () => {
    if (!userName) return;

    const action = {
      type: types.login,
      payload: {
        name: userName,
      },
    };
    dispatch(action);

    const lastPath = localStorage.getItem("lastPath") || "/";

    navigate(lastPath, { replace: true });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img className="img-fluid mb-3" src={mainLogo} alt="webpage main logo" />
        </div>

        <div className="col-md-6">
          <h1>Login</h1>
          <hr />

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="enter your name"
              className="form-control"
              name="userName"
              value={userName}
              autoComplete="off"
              onChange={handleInputChange}
            />
          </form>

          <button className="btn btn-primary mt-3" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
