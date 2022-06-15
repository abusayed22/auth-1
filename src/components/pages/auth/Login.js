import React, { useEffect, useState } from "react";
import { pre_login } from "../../../redux/action/action";
import "./Login.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
function Login() {

  const [user,setUser] = useState({
    email:'',
    password:''
  });

  const navigate = useNavigate()
  const status = useSelector(state => state.auth.status);
  // const auth = useSelector(state => state.auth.login);
  const dispatch = useDispatch();
 
  useEffect(() => {
    if(status) {
      navigate('/')
    }
  },[status])

  const loginprocess =() =>{
    dispatch(pre_login(user))
    // setUser({
    //   email:'',
    //   password:''
    // })
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
              value={user.email}
              onChange={(e) => setUser({...user,email:e.target.value})}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="Username"
              value={user.password}
              onChange={(e) => setUser({...user,password:e.target.value})}
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
