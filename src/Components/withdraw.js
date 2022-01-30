import { React, useState, useContext, useEffect } from "react";
import { CurrentUserContext, UserContext } from "./usercontext";
import { Card } from "./index";

export const Withdraw = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const ctx = useContext(UserContext);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    let withdrawButton = document.getElementById("withdrawButton");
    if (!withdrawAmount) {
      withdrawButton.disabled = true;
    } else if (withdrawAmount) {
      withdrawButton.disabled = false;
    }
  }, [withdrawAmount]);

  function validateWithdrawal() {
    if (Number.isNaN(Number(withdrawAmount))) {
      setStatus("Error: Please enter a number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (Number(withdrawAmount) > ctx.users[currentUser].balance) {
      setStatus(
        "Error: Transaction Failed. Withdraw amount is greater than available funds"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    if (!validateWithdrawal()) return;
    ctx.users[currentUser].balance =
      ctx.users[currentUser].balance - Number.parseInt(withdrawAmount);
    setShow(false);
  }

  function clearForm() {
    setWithdrawAmount("");
    setShow(true);
  }
  return (
    <>
      <h1>Withdraw</h1>
      <Card
        bgcolor="primary"
        header="Withdraw Funds"
        status={status}
        body={
          show ? (
            <>
              <h5>{`Balance: $${ctx.users[currentUser].balance}`}</h5>
              <br />
              Withdraw Amount
              <br />
              <input
                type="text"
                className="form-control"
                onFocus={(e) => e.target.setAttribute("autocomplete", "off")}
                onKeyDown={(e) => (e.key === "e" ? e.preventDefault() : null)}
                id="withdrawAmount"
                placeholder="Enter an amount to withdraw..."
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                id="withdrawButton"
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
            </>
          ) : (
            <>
              <h5>
                Withdraw Successful
                <br />
                {`New Balance is: $${ctx.users[currentUser].balance}`}
              </h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Withdraw Additional Funds
              </button>
            </>
          )
        }
      />
    </>
  );
};
