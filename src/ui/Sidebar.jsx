import { HiCog6Tooth, HiMiniRectangleGroup, HiMiniSquare3Stack3D, HiMiniUserGroup } from "react-icons/hi2";
import Logo from "./Logo";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="row-span-3 py-4 flex flex-col gap-8  shadow-lg">
      <Logo />
      <div className="space-y-4">
        <SidebarRow>
          <div className="bg-slate-50 p-2 rounded-md">
            <HiMiniRectangleGroup className="w-6 h-6 fill-blue-500" />
          </div>
          <p className="text-[15px] text-stone-900">DashBoard</p>
        </SidebarRow>
        <SidebarRow>
          <div className="bg-slate-50 p-2 rounded-md">
            <HiMiniSquare3Stack3D className="w-6 h-6 text-slate-900 fill-blue-500" />
          </div>
          <p className="text-sm">Tips</p>
        </SidebarRow>
        <SidebarRow>
          <div className="bg-slate-50 p-2 rounded-md">
            <HiMiniUserGroup className="w-6 h-6 text-slate-900 fill-blue-500" />
          </div>
          <p className="text-sm">Users</p>
        </SidebarRow>
        <SidebarRow>
          <div className="bg-slate-50 p-2 rounded-md">
            <HiCog6Tooth className="w-6 h-6 text-slate-900 fill-blue-500" />
          </div>
          <p className="text-sm">Settings</p>
        </SidebarRow>
      </div>
    </div>
  );
}

export default Sidebar;
