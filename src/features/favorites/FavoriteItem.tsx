import { HiOutlineStar, HiUser } from "react-icons/hi2";
import { TipsType } from "../../services/apiTips";
import Tag from "../../ui/Tag";

type PropsType = {
  favorite: TipsType;
  addToFavorites: (tipId: number) => void;
  isAdding: boolean;
};

const FavoriteItem = ({ favorite, isAdding, addToFavorites }: PropsType) => {
  const { title, content, categories, id } = favorite;

  return (
    <div className="mt-4 border p-4 flex flex-col gap-4 justify-between shadow-md cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="text-base font-semibold basis-[270px]">{title}</h1>
          <button
          className="self-start"
            disabled={isAdding}
            onClick={() => addToFavorites(id as number)}
          >
            <HiOutlineStar className="w-6 h-6 cursor-pointer self-start fill-yellow-400 stroke-none" />
          </button>
        </div>
        <p className="text-[15px]">{content}</p>
      </div>

      <div>
        <div className="mb-4">
          <Tag>
            <img
              src={categories?.image}
              alt="category_img"
              className="w-6 rounded-full"
            />
            {categories?.name}
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
