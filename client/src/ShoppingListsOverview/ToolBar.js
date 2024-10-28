import { useContext } from "react";
import { UserContext } from "../ShoppingListUsers/UserProvider";

function ToolBar({ handleCreate, setShowArchived, showArchived }) {
  return (
    <div>
      <button onClick={() => handleCreate()}>Create</button>
      <button onClick={() => setShowArchived((current) => !current)}>
        Archiv {showArchived.toString()}
      </button>
    </div>
  );
}

export default ToolBar;
