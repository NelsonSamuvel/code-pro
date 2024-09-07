import { HiEllipsisHorizontal } from "react-icons/hi2";
import { TipsType } from "../../services/apiTips";
import { formatDateTime } from "../../helpers/utils";
import Modal from "../../ui/Modal";
import MyTipsMenu from "./MyTipsMenu";
import Menu from "../../ui/Menu";

type PropsType = {
  tip: TipsType;
  category: {
    id: number;
    name: string;
  };
};

const MyTipsItem = ({ tip, category }: PropsType) => {
  return (
    <li className="border mt-4 p-4 divide-y-2 divide-opacity-35 divide-stone-400 relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 justify-between grow">
          <h2 className="">{tip.title}</h2>
          <p className="tag mr-4">{category.name}</p>
        </div>
        <Menu.Open selectedId={tip.id}>
          <div className="hover:bg-slate-50 rounded-full p-2 cursor-pointer">
            <HiEllipsisHorizontal className="custom-icons" />
          </div>
        </Menu.Open>
        <Menu.Window id={tip.id as number}>
          <MyTipsMenu />
        </Menu.Window>
      </div>
      <div className="py-2">
        <p className="text-sm">Posted At : {formatDateTime(tip.created_at)}</p>
      </div>
    </li>
  );
};

export default MyTipsItem;
