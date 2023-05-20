import "./Overview.css";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import getFinalScore from "../../Functions/checkMilestone";

const Overview = ({ data }) => {
	let { githubprs, codewarsrank, codewarsjspoints } = data[1][0];
	let {
		githubprs: milPR,
		codewarsrank: milCWR,
		codewarsjspoints: milCWJP,
	} = data[2];
	let prsCompare = comparison(githubprs, milPR);
	let codewarRankCompare = comparison(codewarsrank, milCWR);
	let codewarPointsCompare = comparison(codewarsjspoints, milCWJP);

	function comparison(user, milestone) {
		if (user === 0) {
			return 0;
		}

		let sum = ((milestone * 100) / user).toFixed(2);
		if (user > milestone) {
			return 100;
		}
		return sum;
	}

	let score = getFinalScore(
		[githubprs, codewarsrank, codewarsjspoints],
		[milPR, milCWR, milCWJP]
	);

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
					<p>YOU ARE {score} MILESTONE</p>
				</div>
			</div>
			<div className="charts-container">
				<div className="card chart-card">
					<div className="my-progress">
						<p>My Progress</p>
						<div>
							<p>My Github PRs : {githubprs}</p>
							<p>Milestone PRs : {milPR}</p>
							<div className="progress-container">
								<div
									className="progress"
									style={{ width: `${prsCompare}%` }}
								></div>
							</div>
						</div>
						<div>
							<p>My codewars rank : {codewarsrank}</p>
							<p>Milestone codewars rank : {milCWR}</p>
							<div className="progress-container">
								<div
									className="progress"
									style={{ width: `${codewarRankCompare}%` }}
								></div>
							</div>
						</div>
						<div>
							<p>My codewars points : {codewarsjspoints}</p>
							<p>Milestone codewars points : {milCWJP}</p>
							<div className="progress-container">
								<div
									className="progress"
									style={{ width: `${codewarPointsCompare}` }}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className="card chart-card">
					<div>
						<p>My Cohort Progress</p>
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
