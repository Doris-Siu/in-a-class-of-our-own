import "./DashboardHeader.css";
import {  BiLogOut } from "react-icons/bi";

const DashboardHeader = () => {
	return (
		<div className="dash-header">
            <a href="/dashboard">Dashboard</a>
            <ul>
                <li>
                    <button><BiLogOut /></button>
                </li>
            </ul>
        </div>
	);
};
export default DashboardHeader;
