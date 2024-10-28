import { useState } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { UserContex, useContext } from "../ShoppingListUsers/UserProvider.js";

import Header from "./ShoppingListHeader.js";
import ShoppingListOverviewList from "./ShoppingListOverviewList.js";
import ToolBar from "./ToolBar.js";

const id = uuidv4;

function ShoppingListOverviewProvider() {
  const [showArchived, setShowArchived] = useState(false);
  const { loggedUser } = useContext(UserContex);
  const [ShoppingListOverviewList, setShoppingListOverviewList] = useState([
    {
      id: "SL1",
      name: "Shooping List 1",
      state: "active",
      owner: "u1",
      memberList: ["u3"],
    },
    {
      id: "SL2",
      name: "Shooping List 2",
      state: "active",
      owner: "u3",
      memberList: ["u1", "u2"],
    },
    {
      id: "SL3",
      name: "Shooping List 3",
      state: "active",
      owner: "u4",
      memberList: ["u1", "u2", "u3"],
    },
  ]);

  function handleCreate() {
    setShoppingListOverviewList((current) => {
      current.push({
        id: id,
        name: "New shopping list",
        state: "active",
        owner: loggedUser,
        memberList: [],
      });
      return current.slice();
    });
  }

  function handleArchive(input) {
    setShoppingListOverviewList((current) => {
      const itemIndex = current.findIndex((item) => item.id === input.id);
      current[itemIndex] = { ...current[itemIndex], state: "archived" };
      return current.slice();
    });
  }

  function handleDelete(input) {
    setShoppingListOverviewList((current) => {
      const itemIndex = current.findIndex((item) => item.id === input.id);
      current.splice(itemIndex, 1);
      return current.slice();
    });
  }

  const filteredShoppingList = useMemo(() => {
    if (showArchived) {
      return ShoppingListOverviewList.filter(
        (item) =>
          item.owner === loggedUser || item.memberList?.includes(loggedUser)
      );
    } else {
      return ShoppingListOverviewList.filter(
        (item) =>
          item.state === "active" &&
          (item.owner === loggedUser || item.memberList?.includes(loggedUser))
      );
    }
  }, [showArchived, ShoppingListOverviewList, loggedUser]);

  return (
    <>
      <Header />
      <ToolBar
        handleCreate={handleCreate}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <ShoppingListOverviewList
        toDoListOverviewList={filteredShoppingList}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default ShoppingListOverviewProvider;
