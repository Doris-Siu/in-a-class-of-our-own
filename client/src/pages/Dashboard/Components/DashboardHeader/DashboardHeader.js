import "./DashboardHeader.css";
import { BiMoon, BiLogOut } from "react-icons/bi";

const DashboardHeader = () => {
	return (
		<div className="dash-header">
            <a href="/dashboard">Dashboard</a>
            <ul>
                <li>
                    <button><BiMoon /></button>
                </li>
                <li>
                    <button><BiLogOut /></button>
                </li>
            </ul>
        </div>
	);
};
export default DashboardHeader;
