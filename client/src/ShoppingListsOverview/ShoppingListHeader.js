import { useContext } from "react";
import { UserContext } from "../ShoppingListUsers/UserProvider.js";

function Header() {
  const { userList, loggedUser, setLoggedUser } = useContext(UserContext);

  return (
    <div>
      <h1>WTBBTW</h1>
      {userList.map((user) => (
        <button key={user.id} onClick={() => setLoggedUser(user.id)}>
          {user.name} {(user.id === loggedUser).toString()}
        </button>
      ))}
    </div>
  );
}

export default Header;
