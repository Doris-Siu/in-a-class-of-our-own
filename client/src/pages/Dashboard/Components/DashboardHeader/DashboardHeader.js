import "./DashboardHeader.css";
import { BiLogOut } from "react-icons/bi";

const DashboardHeader = () => {
// 	function handleClick( {
// 		// Octokit.js
// // https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('DELETE /applications/{client_id}/grant', {
//   client_id: 'Iv1.8a61f9b3a7aba766',
//   access_token: 'e72e16c7e42f292c6912e7710c838347ae178b4a',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })
// 	})
	return (
		<div className="dash-header">
			<a href="/dashboard">Dashboard</a>
			<ul>
				<li>
					<button aria-label="Log out">
						<BiLogOut />
					</button>
				</li>
			</ul>
		</div>
	);
};
export default DashboardHeader;
