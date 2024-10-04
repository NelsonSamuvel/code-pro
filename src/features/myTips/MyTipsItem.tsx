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
    image: tip.image ? tip.image : undefined,
  };

  function handleDelete() {
    deleteTips(tip.id as number);
  }

  return (
    <li className="border mt-4 p-4 divide-y-2 divide-opacity-35 divide-stone-400 relative">
      <div className="flex flex-col  sm:justify-between justify-center mb-4 gap-2">
        <h2 className="h2">{tip.title}</h2>
        <div className="flex justify-between  gap-4  mt-4">
          <Tag>
            <img
              src={category.image}
              alt="category-img"
              className="w-6 rounded-full"
            />
            {category.name}
          </Tag>

          <div className="hidden md:block">
            <MyTipsMenu
              onDelete={handleDelete}
              isDeleting={isDeleting}
              tip={tipsToEdit}
              category={category.name}
            />
          </div>

          <Menu.Open selectedId={tip.id}>
            <div
              className="hover:bg-slate-50 rounded-full p-2 cursor-pointer md:hidden"
              id="nav-btn"
            >
              <HiEllipsisHorizontal
                className="custom-icons sm:w-5 h-6"
                id="nav-btn"
              />
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
      <div className="pt-4">
        <em className="text-sm">
          Posted At : {formatDateTime(tip.created_at)}
        </em>
      </div>
    </li>
  );
};

export default MyTipsItem;
