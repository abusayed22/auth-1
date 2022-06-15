import React, { useEffect, useState } from "react";
import { pre_login } from "../../../redux/action/action";
import "./Login.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
function Login() {
  const [login,setLogin] = useState({
    email:'',
    password:''
  })
  const auth = useSelector(state => state.auth.login);
  const dispatch = useDispatch();

  const loginprocess =() =>{
    dispatch(pre_login(login))
    setLogin({
      email:'',
      password:''
    })
  }
console.log(auth);
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
              value={login.email}
              onChange={(e) => setLogin({...login,email:e.target.value})}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="Username"
              value={login.password}
              onChange={(e) => setLogin({...login,password:e.target.value})}
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
