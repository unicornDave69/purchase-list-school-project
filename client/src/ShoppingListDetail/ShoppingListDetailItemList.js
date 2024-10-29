import { useContext } from "react";
import { DetailContext } from "./ShoppingListDetailProvider";
import Item from "./Item";

function ItemList() {
  const { data, handlerMap } = useContext(DetailContext);

  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      ItemList <button onClick={() => handlerMap.addItem()}>add item</button>
      <button>filter</button>
      <div>
        {data.itemList.map((item) => (
          <Item key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
