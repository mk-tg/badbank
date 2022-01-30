import "./App.css";
import { React, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {
  AllData,
  Balance,
  CreateAccount,
  Deposit,
  Home,
  Login,
  Withdraw,
} from "./Components/index.js";
import { UserContext } from "./Components/usercontext";
import { NavBar } from "./Components";

function App() {
  const ctx = useContext(UserContext);
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={ctx}>
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
