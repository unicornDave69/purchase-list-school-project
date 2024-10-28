import { useContext } from "react";
import { userContext } from "../ShoppingListUsers/UserProvider.js";

function ShoppingListOverviewItem({
  shoppingList,
  handleArchive,
  handleDelete,
}) {
  const { loggedUser } = useContext(userContext);

  return (
    <div>
      <pre>{JSON.stringify(shoppingList, null, 2)}</pre>
      {loggedUser === shoppingList.owner ? (
        <>
          <button onClick={() => handleArchive({ id: shoppingList.id })}>
            Archived
          </button>
          <button onClick={() => handleDelete({ id: shoppingList.id })}>
            Delete
          </button>
        </>
      ) : null}
    </div>
  );
}

export default ShoppingListOverviewItem;
