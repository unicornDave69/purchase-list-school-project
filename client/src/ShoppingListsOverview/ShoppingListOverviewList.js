import ShoppingListOverviewItem from "./ShoppingListOverviewItem.js";

function ShoppingListOverviewList({
  shoppingLists,
  handleArchive,
  handleDelete,
}) {
  return (
    <div>
      {shoppingLists.map((shoppingList) => (
        <ShoppingListOverviewItem
          key={shoppingList.id}
          shoppingList={shoppingList}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ShoppingListOverviewList;
