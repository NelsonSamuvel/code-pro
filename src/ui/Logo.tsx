import { HiCodeBracket } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Logo() {

  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2" onClick={()=>navigate("/tips")}>
      <button className="logo">
        <HiCodeBracket className="custom-icons fill-slate-200  stroke-2  stroke-slate-200" />
      </button>
      <h2 className={` text-black-stone text-xl tracking-wide font-bold font-montserrat`}>Code Pro</h2>
    </div>
  );
}

export default Logo;
