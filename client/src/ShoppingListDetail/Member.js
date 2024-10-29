import { useContext } from "react";

function Member({ memberId, data, isOwner, showRemoveButton }) {
  return (
    <div>
      {data.name}
      {isOwner ? "true" : ""}
      {showRemoveButton ? <button>remove</button> : null}
    </div>
  );
}

export default Member;
