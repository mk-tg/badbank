import { React, useState, useContext, useEffect } from "react";
import { Card } from "./index";
import { UserContext } from "./usercontext";

export const CreateAccount = (props) => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);

  useEffect(() => {
    let createAccountButton = document.getElementById("createAccountButton");
    if (!name || !email || !password) {
      createAccountButton.disabled = true;
    } else if (name && email && password) {
      createAccountButton.disabled = false;
    }
  }, [name, email, password]);

  function validateNameAndEmail(field, message) {
    if (!field) {
      setStatus("Error: " + message);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validatePassword(field) {
    if (!field) {
      setStatus("Error: Password cannot be blank");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (field.length < 8) {
      setStatus("Error: Password must be long than 7 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validateNameAndEmail(name, "Name cannot be blank")) return;
    if (!validateNameAndEmail(email, "Email cannot be blank")) return;
    if (!validatePassword(password)) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
    console.log(ctx);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              id="createAccountButton"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Account Added Successfully</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
};
