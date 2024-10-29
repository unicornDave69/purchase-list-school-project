import Header from "./ShoppingListDetailHeader";
import Toolbar from "./ShoppingListDetailToolbar";
import ItemList from "./ShoppingListDetailItemList";
import DetailProvider from "./ShoppingListDetailProvider";
import MemberList from "./MemberList";

function Detail() {
  return (
    <div>
      <DetailProvider>
        <Header />
        <Toolbar />
        <MemberList />
        <ItemList />
      </DetailProvider>
    </div>
  );
}

export default Detail;
