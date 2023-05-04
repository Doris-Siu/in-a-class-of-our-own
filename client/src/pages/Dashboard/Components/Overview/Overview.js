import "./Overview.css";

const Overview = () => {
	return (
		<div className="overview" >
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
						<div></div>
					</div>
				</div>
				<div className="card chart-card">
					<div>
						<h5>My Cohort Progress</h5>
						<p>Other trainees milestone</p>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Overview;
