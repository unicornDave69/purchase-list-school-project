import { createContext } from "react";
import { useState } from "react";

export const UserContex = createContext();

function UserProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState("user1");

  const userMap = {
    user1: {
      id: "u1",
      name: "David",
    },
    user2: {
      id: "u2",
      name: "Satoriek",
    },
    user3: {
      id: "u3",
      name: "Filip",
    },
    user4: {
      id: "u4",
      name: "Andrej",
    },
  };

  const value = {
    userMap,
    loggedUser,
    setLoggedUser,
    userList: Object.keys(userMap).map((userId) => userMap[userId]),
  };

  return <UserContex.Provider value={value}>{children}</UserContex.Provider>;
}

export default UserProvider;
