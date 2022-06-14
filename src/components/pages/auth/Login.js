import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [login,setLogin] = useState()

  const loginprocess =() =>{

  }

  return (
    <div className="main__login">
      <div className="login_box">
        <form action="">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail address"
              aria-label="Username"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="Username"
            />
          </div>
          <button onClick={() => loginprocess()} type="button" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
