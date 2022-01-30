import React from "react";
import { Card } from "./index";
import bankImage from "../images/bank.png";

export const Home = () => {
  return (
    <Card
      txtcolor="black"
      header="WELCOME TO THE BANK"
      title="For all your banking needs"
      text="You can move around using the navigation bar."
      body={<img src={bankImage} className="img-fluid" alt="bank image" />}
    />
  );
};
