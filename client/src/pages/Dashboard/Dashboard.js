import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import DashboardHeader from "./Components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "./Components/Sidebar/Sidebar";
import Overview from "./Components/Overview/Overview";
import CyfMilestone from "./Components/CyfMilestone/CyfMilestone";
import SetMilestone from "./Components/SetMilestone/SetMilestone";
import { useGlobalContext } from "../../Components/context";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [githubName, setGithubName] = useState(
		useGlobalContext().globalgithubName
	);
	useEffect(() => {
		if (githubName) {
			// Save a value in local storage
			localStorage.setItem("githubName", githubName);
		}

		// Retrieve a value from local storage
		const savedValue = localStorage.getItem("githubName");
		setGithubName(savedValue);
		console.log("savedValue:", savedValue);
		async function fetchData() {
			try {
				const response = await axios.get(`api/milestonestatus/${savedValue}`);
				console.log(response.data);
				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (data[1].length > 0) {
		return (
			<div className="dashboard">
				<DashboardHeader />
				<DashboardSidebar data={data[1][0]} />
				<Routes className="main-section">
					<Route index element={<Overview data={data} />} />
					<Route path="/set-milestone" element={<SetMilestone />} />
					<Route path="/cyf-milestone" element={<CyfMilestone />} />
				</Routes>
			</div>
		);
	} else {
		return (
			<div className="dashboard">
				<DashboardHeader />
				<Routes className="main-section">
					<Route path="/set-milestone" element={<SetMilestone />} />
					<Route path="/cyf-milestone" element={<CyfMilestone />} />
				</Routes>
			</div>
		);
	}
};
export default Dashboard;
