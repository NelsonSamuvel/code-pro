import { HiMenu } from "react-icons/hi";

export default function MenuBar() {
  return (
    <div className="space-x-4 block sm:hidden">
      <button className="rounded-icon">
        <HiMenu className="custom-icons" />
      </button>
    </div>
  );
}
