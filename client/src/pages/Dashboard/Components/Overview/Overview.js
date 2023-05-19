import "./Overview.css";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import getFinalScore from "../../Functions/checkMilestone";
import { useState } from "react";
import loadingGif from "../../../../Assets/loading.gif";

const Overview = ({ data }) => {
	console.log(data,"overview data");

	const [ownProgress, setOwnProgress] = useState(null);
	const [cyfProgress, setCyfProgress] = useState(null);
	const [loading, setLoding] = useState(false);
	const [error, setError] = useState(null);


	let score = getFinalScore([25, 400], [25, 400]);

	const traineeChartData = {
		labels: ["Codewars", "# of PRs"],
		datasets: [
			{
				data: [12, 19],
				backgroundColor: ["rgba(252, 3, 3)", "rgb(15, 183, 26)"],
				borderColor: ["rgba(252, 3, 3)", "rgb(15, 183, 26)"],
				borderWidth: 1,
			},
		],
	};
	const cohortChartData = {
		labels: ["Behind", "At", "Beyond"],
		datasets: [
			{
				data: [3, 17, 1],
				backgroundColor: [
					"rgba(252, 3, 3)",
					"rgb(15, 183, 26)",
					"rgba(3, 82, 252)",
				],
				borderColor: [
					"rgba(252, 3, 3)",
					"rgb(15, 183, 26)",
					"rgba(3, 82, 252)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div className="overview">
			<div className="card overview-title">
				<p>YOUR CURRENT STATUS</p>
				<div>
					<p>
						YOU ARE {score} {data[0][0].id}
					</p>
				</div>
			</div>
			<div className="charts-container">
				<div className="card chart-card">
					<div>
						<p>My Own Progress</p>
						<p>Github PRs & Codewars</p>
						<div>
							{loading ? (
								<img src={loadingGif} alt="loading" className="loading" />
							) : (
								<Chart type="pie" data={traineeChartData} />
							)}
						</div>
					</div>
				</div>
				<div className="card chart-card">
					<div>
						<p>My Cohort Progress</p>
						<p>Other trainees milestone</p>
						<div>
							{loading ? (
								<img src={loadingGif} alt="loading" className="loading" />
							) : (
								<Chart type="pie" data={cohortChartData} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Overview;
