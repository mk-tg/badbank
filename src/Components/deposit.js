import { React, useState, useContext, useEffect } from "react";
import { CurrentUserContext, UserContext } from "./usercontext";
import { Card } from "./index";

export const Deposit = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const ctx = useContext(UserContext);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    let depositButton = document.getElementById("depositButton");
    if (!depositAmount) {
      depositButton.disabled = true;
    } else if (depositAmount) {
      depositButton.disabled = false;
    }
  }, [depositAmount]);

  function validateDeposit() {
    if (Number.isNaN(Number(depositAmount))) {
      setStatus("Error: Please enter a number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (Number(depositAmount) <= 0) {
      setStatus("Error: Please enter only positive numbers greater than 0");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if (!validateDeposit()) return;
    ctx.users[currentUser].balance =
      ctx.users[currentUser].balance + Number.parseInt(depositAmount);
    setShow(false);
  }

  function clearForm() {
    setDepositAmount("");
    setShow(true);
  }
  return (
    <>
      <h1>Deposit</h1>
      <Card
        bgcolor="primary"
        header="Deposit Funds"
        status={status}
        body={
          show ? (
            <>
              <h5>{`Balance: $${ctx.users[currentUser].balance}`}</h5>
              <br />
              Deposit Amount
              <br />
              <input
                type="text"
                className="form-control"
                onFocus={(e) => e.target.setAttribute("autocomplete", "off")}
                onKeyDown={(e) => (e.key === "e" ? e.preventDefault() : null)}
                id="depositAmount"
                placeholder="Enter an amount to deposit..."
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                id="depositButton"
                onClick={handleDeposit}
              >
                Deposit
              </button>
            </>
          ) : (
            <>
              <h5>
                Deposit Successful
                <br />
                {`New Balance is: $${ctx.users[currentUser].balance}`}
              </h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Deposit Additional Funds
              </button>
            </>
          )
        }
      />
    </>
  );
};
