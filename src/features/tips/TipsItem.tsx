//types

import { HiOutlineStar, HiUser } from "react-icons/hi";
import { format } from "date-fns";
import { formatDateTime } from "../../helpers/utils";
import { useAuth } from "../authentication/useAuth";
import { TipsType } from "../../services/apiTips";
import Tag from "../../ui/Tag";

export type TipType = {
  tip: TipsType;
};

export default function TipsItem({ tip }: TipType) {
  const { title, content, created_at, profiles, categories } = tip;

  const { user } = useAuth();

  const isCurrentUser = user?.id === profiles?.user_id;

  return (
    <div className="mt-4 border p-4 flex flex-col gap-4 justify-between shadow-md cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="text-base font-semibold ">{title}</h1>
          <HiOutlineStar className="w-5 h-5 cursor-pointer self-start" />
        </div>
        <p className="text-[15px]">{content}</p>
      </div>

      <div>
        <Tag>
          <img
            src={tip.categories?.image}
            alt="category_img"
            className="w-6 rounded-full"
          />
          {categories?.name}
        </Tag>
        <div className="text-sm flex items-center justify-between text-slate-600">
          <div className="flex gap-1 items-center bg-slate-200 pl-2 pr-3 py-1 rounded-full max-w-fit cursor-pointer">
            <HiUser />
            <p className="">{isCurrentUser ? "You" : profiles?.username}</p>
          </div>
          <p className="italic">{formatDateTime(created_at)}</p>
        </div>
      </div>
    </div>
  );
}
