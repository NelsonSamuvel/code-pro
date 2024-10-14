//types

import {
  HiOutlineCamera,
  HiOutlinePhotograph,
  HiOutlineStar,
  HiUser,
  HiVideoCamera,
} from "react-icons/hi";
import { format } from "date-fns";
import { formatDateTime } from "../../helpers/utils";
import { useAuth } from "../authentication/useAuth";
import { TipsType } from "../../services/apiTips";
import Tag from "../../ui/Tag";
import { HiOutlineVideoCameraSlash, HiUserCircle } from "react-icons/hi2";
import TrimContent from "./TrimContent";
import UserCard from "../../components/user/UserCard";
import { ProfilesType } from "../../services/apiProfiles";

export type TipType = {
  tip: TipsType;
  favorites: number[];
  isAdding: boolean;
  addToFavorites: (tipId: number) => void;
  view: string;
};

export default function TipsItem({
  tip,
  favorites,
  addToFavorites,
  isAdding,
  view,
}: TipType) {
  const { title, content, created_at, profiles, categories, id } = tip;

  const { user } = useAuth();

  const isCurrentUser = user?.id === profiles?.user_id;

  const isFavorite = favorites?.includes(tip.id as number);

  const isStarred = isFavorite ? "fill-yellow-400 stroke-none w-6 h-6" : "";

  return (
    <div className="relative rounded-md mt-4 px-6 py-8 flex flex-col gap-4  shadow-md hover:shadow-xl">
      {view === "grid" ? (
        tip.image ? (
          <img
            src={tip.image}
            alt=""
            className="rounded-md h-[200px] object-cover"
          />
        ) : (
          <div className="bg-stone-100 h-[200px] rounded-md flex items-center justify-center">
            <HiOutlinePhotograph className="w-12 h-12 stroke-1 stroke-stone-400" />
          </div>
        )
      ) : null}

      <div className="flex flex-col gap-2 mt-12">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="font-semibold basis-[270px] text-lg">{title}</h1>
          <button
            className="disabled:cursor-not-allowed self-start focus:outline-none focus:ring-0 focus:ring-yellow-400 focus:ring-offset-2"
            disabled={isAdding}
            onClick={() => addToFavorites(id as number)}
          >
            <HiOutlineStar
              className={`w-6 h-6   cursor-pointer self-start ${isStarred} cursor-pointer`}
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
