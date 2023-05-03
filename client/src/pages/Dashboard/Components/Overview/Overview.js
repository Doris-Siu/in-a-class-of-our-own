import "./Overview.css";

const Overview = () => {
	return (
		<div className="overview" >
			<div className="card overview-title">
				<h4>YOUR CURRENT STATUS</h4>
				<div>
					<p>YOU ARE AT THE MILESTONE</p>
				</div>
			</div>
			<div className="chart-container">
				<div className="card chart">
					<div>
						<h2>CYF Milstone</h2>
						<p>You can find out how others doing:</p>
						<div></div>
					</div>
				</div>
				<div className="card chart">
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
