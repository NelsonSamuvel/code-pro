import { HiCodeBracket } from "react-icons/hi2";
import RoundedIcon from "./RoundedIcon";

function Logo() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <RoundedIcon>
        <HiCodeBracket className="w-4 h-6 sm:w-6 sm:h-8 fill-slate-200 stroke-1 stroke-slate-200" />
      </RoundedIcon>
      <h2 className="text-slate-900 text-lg font-semibold">Code Pro</h2>
    </div>
  );
}

export default Logo;
