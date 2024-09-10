import MyTipsList from "../features/dashboard/MyTipsList";
import Sidebar from "../ui/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[120px_1fr]  sm:grid-cols-[250px_1fr]">
      <Sidebar/>
      <MyTipsList />
    </div>
  );
};

export default Dashboard;
