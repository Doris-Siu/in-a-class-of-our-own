import { NavLink } from "react-router-dom";

import "./Sidebar.css";
// import

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-head">
				<h2>user name</h2>
				<h6>cohort name</h6>
			</div>
			<ul className="side-links">
				<li>
					<NavLink to="overview">Overview</NavLink>
				</li>
				<li>
					<NavLink to="set-milestone">Set Milestone</NavLink>
				</li>
				<li>
					<NavLink to="cyf-milestone">CYF Milestone</NavLink>
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;
