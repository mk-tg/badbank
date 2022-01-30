import { React } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="container-md">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="#/" className="navbar-brand">
            Bad Bank
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="CreateAccount"
                  className="nav-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Create your account at Bad Bank"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "lightgray",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Create Account
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="deposit"
                  className="nav-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Deposit additional funds"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "lightgray",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Deposit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="withdraw"
                  className="nav-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Withdraw funds from your account"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "lightgray",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Withdraw
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="alldata"
                  className="nav-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="See all data at Bad Bank"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "lightgray",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  All Data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
