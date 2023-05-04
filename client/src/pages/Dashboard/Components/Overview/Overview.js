import "./Overview.css";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
const Overview = () => {
	const traineeChartData = {
		labels: ["Codewars", "# of PRs"],
		datasets: [
			{
				data: [12, 19],
				backgroundColor: [
					"rgba(252, 3, 3)",
					"rgb(15, 183, 26)",
				],
				borderColor: [
					"rgba(252, 3, 3)",
					"rgb(15, 183, 26)",
				],
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
				<h5>YOUR CURRENT STATUS</h5>
				<div>
					<p>YOU ARE AT THE MILESTONE</p>
				</div>
			</div>
			<div className="charts-container">
				<div className="card chart-card">
					<div>
						<h5>My Own Progress</h5>
						<p>Github PRs & Codewars</p>
						<Chart type="pie" data={traineeChartData} />
					</div>
				</div>
				<div className="card chart-card">
					<div>
						<h5>My Cohort Progress</h5>
						<p>Other trainees milestone</p>
						<div>
							<Chart type="pie" data={cohortChartData} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Overview;
