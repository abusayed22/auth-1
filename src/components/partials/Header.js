import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pre_logout } from "../../redux/action/action";
import "./Header.css";

function Header() {
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  const processLogout = () => {
      dispatch(pre_logout(token))
  }
  return (
    <div className="main_header">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h2 className="text-info">Prodcuts</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products Info
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/read">
                      All-products
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/add">
                      Add-product 
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              
              
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={processLogout} className="nav-link btn btn-danger text-white">Logout</button>
              </li>
            </ul>
              
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
