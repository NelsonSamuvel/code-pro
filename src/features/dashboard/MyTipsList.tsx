import { createPortal } from "react-dom";
import Menu from "../../ui/Menu";
import Spinner from "../../ui/Spinner";
import { useAuth } from "../authentication/useAuth";
import MyTipsItem from "./MyTipsItem";
import { useMyTips } from "./useMyTips";

const MyTipsList = () => {
  const { user } = useAuth();

  const { myTips, isLoading } = useMyTips(user?.id as string);

  if (isLoading) return createPortal(<Spinner />, document.body);

  if (!myTips) return null;

  return (
    <Menu>
      <section className="p-6">
        <h1 className="h1">My Tips</h1>
        <ul>
          {myTips.map((tip) => (
            <MyTipsItem key={tip.id} tip={tip} category={tip.category} />
          ))}
        </ul>
      </section>
    </Menu>
  );
};

export default MyTipsList;
