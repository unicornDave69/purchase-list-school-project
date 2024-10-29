import { useContext, useState } from "react";
import { DetailContext } from "./ShoppingListDetailProvider";
import { UserContext } from "../ShoppingListUsers/UserProvider";
import UpdateName from "./UpdateName";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { data, handlerMap } = useContext(DetailContext);
  const { loggedUser } = useContext(UserContext);

  return (
    <div>
      <UpdateName
        show={show}
        handleClose={() => setShow(false)}
        data={data}
        handlerMap={handlerMap}
      />
      {data.name}{" "}
      {loggedUser === data.owner ? (
        <button onClick={() => setShow(true)}>update name</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Toolbar;
