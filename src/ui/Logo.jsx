import { HiCodeBracket } from "react-icons/hi2";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded-icon bg-stone-800">
        <HiCodeBracket className="custom-icons fill-slate-200 stroke-2 stroke-slate-200" />
      </button>
      <h2 className={` text-stone-900 text-lg font-semibold`}>Code Pro</h2>
    </div>
  );
}

export default Logo;
