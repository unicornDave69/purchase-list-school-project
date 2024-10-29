import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4;
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
        updateName: ({name}) => {
            setData ((current) => {
                current.name = name;
                return {...current};
            });
        },
        addItem: () => {
            setData((current) => {
                current.itemList.push({
                    id: id,
                    name: "",
                    resolved: false,
                });
                return {...current};
            });
        },
        updateItemName: ({name}) => {
            setData ((current) => {
                const itemIndex = current.itemList.findIndex(
                    (item) => item.id === id
                );

                current.itemList[itemIndex] = {
                    ...current.itemList[itemIndex],
                    name,
                };
                return {...current};
            }
                )
            })
        }
    }
  }
}
