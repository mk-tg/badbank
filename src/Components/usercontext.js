import { createContext } from "react";

const UserContext = createContext({
  users: [
    { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 },
  ],
});

const CurrentUserContext = createContext(0);

export { UserContext, CurrentUserContext };
