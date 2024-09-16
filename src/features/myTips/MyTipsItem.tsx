import { HiEllipsisHorizontal } from "react-icons/hi2";
import { TipsType } from "../../services/apiTips";
import { formatDateTime } from "../../helpers/utils";
import MyTipsMenu from "./MyTipsMenu";
import Menu from "../../ui/Menu";
import { useDeleteTips } from "./useDeleteTips";
import { TipType } from "../tips/AddTipsForm";
import Tag from "../../ui/Tag";

type PropsType = {
  tip: TipsType;
  category: {
    id: number;
    name: string;
    image: string;
  };
};

const MyTipsItem = ({ tip, category }: PropsType) => {
  const { deleteTips, isDeleting } = useDeleteTips();

  const tipsToEdit: TipType = {
    id: tip.id,
    title: tip.title,
    content: tip.content,
    category: category.name,
  };

  function handleDelete() {
    deleteTips(tip.id as number);
  }

  return (
    <li className="border mt-4 p-4 divide-y-2 divide-opacity-35 divide-stone-400 relative">
      <div className="flex md:items-center flex-col md:flex-row sm:justify-between justify-center mb-2 gap-2 md:gap-4">
        <div className="mb-2">
          <h2 className="h2">{tip.title}</h2>
          <div className="flex items-center justify-between mt-4">
            <Tag>
              <img
                src={category.image}
                alt="category-img"
                className="w-6 rounded-full"
              />
              {category.name}
            </Tag>

            <Menu.Open selectedId={tip.id}>
              <div
                className="hover:bg-slate-50 rounded-full p-2 cursor-pointer md:hidden"
                id="nav-btn"
              >
                <HiEllipsisHorizontal className="custom-icons" id="nav-btn" />
              </div>
            </Menu.Open>
            <Menu.Window id={tip.id as number}>
              <MyTipsMenu
                onDelete={handleDelete}
                isDeleting={isDeleting}
                tip={tipsToEdit}
                category={category.name}
              />
            </Menu.Window>
          </div>
        </div>

        <div className="hidden md:block">
          <MyTipsMenu
            onDelete={handleDelete}
            isDeleting={isDeleting}
            tip={tipsToEdit}
            category={category.name}
          />
        </div>
      </div>
      <div className="py-2">
        <p className="text-sm">Posted At : {formatDateTime(tip.created_at)}</p>
      </div>
    </li>
  );
};

export default MyTipsItem;
