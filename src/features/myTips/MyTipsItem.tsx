import { HiEllipsisHorizontal } from "react-icons/hi2";
import { TipsType } from "../../services/apiTips";
import { formatDateTime } from "../../helpers/utils";
import MyTipsMenu from "./MyTipsMenu";
import Menu from "../../ui/Menu";
import { useDeleteTips } from "./useDeleteTips";
import { useCurrentTip } from "./useCurrentTip";
import { TipType, useEditTip } from "../../store/useEditTip";
import { useCallback } from "react";

type PropsType = {
  tip: TipsType;
  category: {
    id: number;
    name: string;
  };
};

const MyTipsItem = ({ tip, category }: PropsType) => {
  const { deleteTips, isDeleting } = useDeleteTips();
  const setTip = useEditTip((state) => state.setTip);

  const tipsToEdit: TipType = {
    id: tip.id,
    title: tip.title,
    content: tip.content,
    category_id: category.id,
  };

  function handleDelete() {
    deleteTips(tip.id as number);
  }

  const handleEdit = (tip: TipType) => {
    console.log("handle edit");
    setTip(tip);
  };

  return (
    <li className="border mt-4 p-4 divide-y-2 divide-opacity-35 divide-stone-400 relative">
      <div className="flex items-center justify-between mb-2  gap-4">
        <div className="space-y-2">
          <h2 className="h2">{tip.title}</h2>
          <p className="tag m-0 mr-4">{category.name}</p>
        </div>

        <div className="hidden md:block">
          <MyTipsMenu
            onDelete={handleDelete}
            isDeleting={isDeleting}
            onEdit={handleEdit}
            tip={tipsToEdit}
          />
        </div>

        <Menu.Open selectedId={tip.id}>
          <div className="hover:bg-slate-50 rounded-full p-2 cursor-pointer md:hidden">
            <HiEllipsisHorizontal className="custom-icons" id="nav-btn" />
          </div>
        </Menu.Open>
        <Menu.Window id={tip.id as number}>
          <MyTipsMenu
            onDelete={handleDelete}
            isDeleting={isDeleting}
            tip={tipsToEdit}
            onEdit={handleEdit}
          />
        </Menu.Window>
      </div>
      <div className="py-2">
        <p className="text-sm">Posted At : {formatDateTime(tip.created_at)}</p>
      </div>
    </li>
  );
};

export default MyTipsItem;
