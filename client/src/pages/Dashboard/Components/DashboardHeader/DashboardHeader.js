import "./DashboardHeader.css";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
const DashboardHeader = () => {
	async function handleClick() {
		//call delete oauth app grant in api.js
		await axios.delete("api/applications/grant", {
			data: {
				accessToken: window.localStorage.getItem("accessToken"),
			},
		});
		//redirect to home page
		window.location.assign("/");
	}
	return (
		<div className="dash-header">
			<a href="/dashboard">Dashboard</a>
			<ul>
				<li>
					<button onClick={handleClick} aria-label="Log out">
						<BiLogOut />
					</button>
				</li>
			</ul>
		</div>
	);
};
export default DashboardHeader;
