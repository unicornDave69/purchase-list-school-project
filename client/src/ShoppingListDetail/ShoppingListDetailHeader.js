import { useContext } from "react";
import { UserContex } from "../ShoppingListUsers/UserProvider";

function Header() {
  const { userList, loggedUser, setLoggedUser } = useContext(UserContex);

  return (
    <div>
      WTBBTW{""}
      {userList.map((user) => (
        <button key={user.id} onClick={() => setLoggedUser(user.id)}>
          {user.name} {user.id === loggedUser.toString()}
        </button>
      ))}
    </div>
  );
}

export default Header;
