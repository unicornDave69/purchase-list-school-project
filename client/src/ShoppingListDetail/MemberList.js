import { useContext } from "react";
import { DetailContext } from "./ShoppingListDetailProvider";
import { UserContext } from "../ShoppingListUsers/UserProvider";
import Member from "./Member";

function MemberList() {
  const { data } = useContext(DetailContext);
  const { userMap, loggedUser } = useContext(UserContext);

  return (
    <div>
      <div>
        Member List{" "}
        {data.owner === loggedUser ? <button>add member</button> : ""}
      </div>
      <Member memberId={data.owner} data={userMap[data.owner]} isOwner={true} />
      {data.memberList.map((memberId) => (
        <Member
          key={memberId}
          memberId={memberId}
          data={userMap[memberId]}
          showRemoveButton={
            loggedUser === data.owner || memberId === loggedUser
          }
        />
      ))}
    </div>
  );
}

export default MemberList;
