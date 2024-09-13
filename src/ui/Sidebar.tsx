import {
  HiCog6Tooth,
  HiMiniSquare3Stack3D,
  HiMiniUserGroup,
  HiRectangleGroup,
} from "react-icons/hi2";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="py-4  flex flex-col gap-6 md:gap-2 shadow-lg h-screen">
      <SidebarRow to="dashboard/userDashboard">
        <div className="bg-slate-50 p-2 rounded-md">
          <HiRectangleGroup className="custom-icons" />
        </div>
        <div className="grow">
          <p className="text-stone-700">DashBoard</p>
        </div>
      </SidebarRow>
      <SidebarRow to="dashboard/userTips">
        <div className="bg-slate-50 p-2 rounded-md">
          <HiMiniSquare3Stack3D className="custom-icons" />
        </div>
        <div className="grow">
          <p className="text-stone-700">Tips</p>
        </div>
      </SidebarRow>
    </div>
  );
}

export default Sidebar;
