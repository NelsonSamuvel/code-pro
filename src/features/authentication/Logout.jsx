import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoggingOut } = useLogout();

  return (
    <>
      <button onClick={logout} className="bg-blue-100 rounded-full p-2">
        {isLoggingOut ? (
          <SpinnerMini />
        ) : (
          <HiArrowRightOnRectangle className="w-6 h-6 sm:w-8 sm:h-8  stroke-slate-900 fill-slate-600" />
        )}
      </button>
    </>
  );
}

export default Logout;
