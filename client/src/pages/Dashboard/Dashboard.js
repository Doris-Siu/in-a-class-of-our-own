import "./Dashboard.css";

import DashboardHeader from "./Components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "./Components/Sidebar/Sidebar";



const Dashboard = () => {
  return (
		<div className="dashboard">
			<DashboardHeader />
			<DashboardSidebar />
		</div>
	);
};
export default Dashboard;