import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = ({ data }) => {
	return (
		<div className="sidebar">
			<div className="sidebar-head">
				<h2>{data.displayname}</h2>
				<p>{data.cohort}</p>
			</div>
			<ul className="side-links">
				<li>
					<NavLink to="" end>
						Overview
					</NavLink>
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
