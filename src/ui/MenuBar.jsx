import { HiMenu } from "react-icons/hi";

export default function MenuBar() {
  return (
    <div className="space-x-4 block sm:hidden">
      <button className="rounded-icon hover:bg-stone-100">
        <HiMenu className="custom-icons" />
      </button>
    </div>
  );
}
