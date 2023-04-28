import "./ApplicationInfo.css";

export default function ApplicationInfo() {
	return (
		<div className="main-container">
			<h1>About the application</h1>
			<p className="app-intro">
				This is a website for trainees from CodeYourFuture (CYF) to track their
				progress against the milstones set by the Director of Education.
				<br /><br />
				As each trainee is on their own personal journey towards employment, the
				application provides a clean and user-friendly interface to display
				their progress with various functionalities.
			</p>
			<p className="app-function">
				As a CYF trainee, you can do the followings after logging in with your
				Github account successfully.
			</p>
			<div>
			1. Define your own milstones <br />
			2. Check your own milestones and the one set by CYF <br />
			3. View your progress over time by dashboards <br />
			</div>
		</div>
	);
}
