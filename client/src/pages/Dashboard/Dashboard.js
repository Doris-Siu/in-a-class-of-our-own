import "./Dashboard.css";

import { Route, Routes } from "react-router-dom";
import DashboardHeader from "./Components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "./Components/Sidebar/Sidebar";

import Overview from "./Components/Overview/Overview";
import CyfMilestone from "./Components/CyfMilestone/CyfMilestone";
import SetMilestone from "./Components/SetMilestone/SetMilestone";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<DashboardHeader />
			<DashboardSidebar />
			<Routes className="main-section">
				<Route index element={<Overview />} />
				<Route path="/set-milestone" element={<SetMilestone />} />
				<Route path="/cyf-milestone" element={<CyfMilestone />} />
			</Routes>
		</div>
	);
};
export default Dashboard;
