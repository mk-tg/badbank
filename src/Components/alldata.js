import { React, useContext } from "react";
import { UserContext } from "./usercontext";
import { AccountCard } from "./accountcard";

export const AllData = (props) => {
  const ctx = useContext(UserContext);

  return (
    <>
      <h5>All Data</h5>
      <br />
      <table className="table">
        <thead className="thead thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {ctx.users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
