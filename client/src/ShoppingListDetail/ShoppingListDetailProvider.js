import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  const [data, setData] = useState({
    id: "SL01",
    name: "New ShoppingList",
    owner: "u1",
    memberList: ["u2", "u3"],
    itemList: [
      {
        id: "SLI1",
        name: "carrot",
        amount: 3,
        resolved: false,
      },
    ],
  });

  const value = {
    data,
    handlerMap: {
      updateName: ({ name }) => {
        setData((current) => ({
          ...current,
          name,
        }));
      },
      addItem: () => {
        setData((current) => ({
          ...current,
          itemList: [
            ...current.itemList,
            {
              id: uuidv4(),
              name: "",
              amount: 1,
              resolved: false,
            },
          ],
        }));
      },
      updateItemName: ({ id, name }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          if (itemIndex !== -1) {
            const newItemList = [...current.itemList];
            newItemList[itemIndex] = {
              ...newItemList[itemIndex],
              name,
            };
            return { ...current, itemList: newItemList };
          }
          return current;
        });
      },
      resolveItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            resolved: !current.itemList[itemIndex].resolved,
          };
          return { ...current };
        });
      },
      deleteItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList.splice(itemIndex, 1);
          return { ...current };
        });
      },
    },
  };

  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider;
