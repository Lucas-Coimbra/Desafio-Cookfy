import React, { createContext } from "react";
import useRandomUser from "../hooks/useRandomUser";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const userData = useRandomUser();
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

export default UserContext;
