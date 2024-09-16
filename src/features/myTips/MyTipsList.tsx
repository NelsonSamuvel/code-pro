import Menu from "../../ui/Menu";
import Spinner from "../../ui/Spinner";
import MyTipsItem from "./MyTipsItem";
import { useMyTips } from "./useMyTips";
import EmptyData from "../../ui/EmptyData";
import Modal from "../../ui/Modal";
import AddTipsModal from "../../ui/AddTipsModal";

const MyTipsList = () => {

  const { myTips, isLoading, error } = useMyTips();

  if (isLoading) return <Spinner />;

  if (error) return <p className="flex">{error.message}</p>;
  if ( !myTips?.length) return <EmptyData name="Tips" />;

  return (
    <Menu>
      <Modal>
        <section className="p-6">
          <div className="flex justify-between gap-2">
            <h1 className="h1">My Tips</h1>
            <AddTipsModal />
          </div>
          <ul>
            {myTips.map((tip) => (
              <MyTipsItem key={tip.id} tip={tip} category={tip.category} />
            ))}
          </ul>
        </section>
      </Modal>
    </Menu>
  );
};

export default MyTipsList;
