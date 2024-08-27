import { HiOutlineStar } from "react-icons/hi";

export default function TipsItem({ tip }) {
  const { title, content } = tip;

  return (
    <div className="mt-4 border p-4 flex flex-col gap-2 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">{title}</h1>
        <HiOutlineStar className="w-5 h-5 cursor-pointer" />
      </div>
      <p className="text-stone-500">{content}</p>
    </div>
  );
}
