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
import loadingGif from "../../Assets/loading.gif";


const Dashboard = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [githubName, setGithubName] = useState(
		useGlobalContext().globalgithubName
	);
	function latestData(x) {
		setData(x.data);
	}
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
				// const response = await axios.get("api/milestonestatus/8maziar");
				console.log(response.data);
				latestData(response);
				// setData(response.data);
				// setTimeout(async () => {
				// 	const response2 = await axios.get(
				// 		`api/milestonestatus/${savedValue}`
				// 	);
				// 	console.log(response2.data);
				// 	setData(response2.data);
				// 	setIsLoading(false);
				// }, 300);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
if (loading) {
	return (
		<div className="loadingPage">
			<img src={loadingGif} alt="loading" className="loadingStatus" />
		</div>
	);
}
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
};
export default Dashboard;
