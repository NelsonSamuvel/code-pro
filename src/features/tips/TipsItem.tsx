//types

import { HiOutlineStar, HiUser } from "react-icons/hi";
import { format } from "date-fns";
import { formatDateTime } from "../../helpers/utils";
import { useAuth } from "../authentication/useAuth";
import { TipsType } from "../../services/apiTips";
import Tag from "../../ui/Tag";
import { HiUserCircle } from "react-icons/hi2";
import TrimContent from "./TrimContent";
import UserCard from "../../components/user/UserCard";
import { ProfilesType } from "../../services/apiProfiles";

export type TipType = {
  tip: TipsType;
  favorites: number[];
  isAdding: boolean;
  addToFavorites: (tipId: number) => void;
};

export default function TipsItem({
  tip,
  favorites,
  addToFavorites,
  isAdding,
}: TipType) {
  const { title, content, created_at, profiles, categories, id } = tip;

  const { user } = useAuth();

  const isCurrentUser = user?.id === profiles?.user_id;

  const isFavorite = favorites?.includes(tip.id as number);

  const isStarred = isFavorite ? "fill-yellow-400 stroke-none w-6 h-6" : "";

  return (
    <div className="relative mt-4 border p-4 flex flex-col gap-4 justify-between shadow-md hover:shadow-xl hover:cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="text-base font-semibold basis-[270px] lg:text-lg">{title}</h1>
          <button
            className="disabled:cursor-not-allowed self-start"
            disabled={isAdding}
            onClick={() => addToFavorites(id as number)}
          >
            <HiOutlineStar
              className={`w-5 h-5 cursor-pointer self-start ${isStarred} cursor-pointer`}
            />
          </button>
        </div>
        <TrimContent content={content} />
      </div>

      <div>
        <div className="mb-4 flex justify-between">
          <Tag>
            <img
              src={tip.categories?.image}
              alt="category_img"
              className="w-6 rounded-full"
            />
            {categories?.name}
          </Tag>
          <div className="flex gap-1 items-center  px-2 py-1 rounded-full cursor-pointer group">
            {profiles?.avatar ? (
              <img src={profiles.avatar} alt="" className="profile-img" />
            ) : (
              <HiUserCircle className="w-6 h-6 fill-stone-500 " />
            )}
            <div className="">
              <p className="text-[15px]">
                {isCurrentUser ? "You" : profiles?.username}
              </p>
              {/* <UserCard profile={profiles as ProfilesType} /> */}
            </div>
          </div>
        </div>
        <div className="text-sm text-right text-slate-600">
          <p className="italic">{formatDateTime(created_at)}</p>
        </div>
      </div>
    </div>
  );
}
