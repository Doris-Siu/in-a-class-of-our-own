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
						<h2>CYF Milstone</h2>
						<p>You can find out how others doing:</p>
						<div></div>
					</div>
				</div>
				<div className="card chart-card">
					<div>
						<h2>User Milstone</h2>
						<p>You can find out how others doing:</p>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Overview;
