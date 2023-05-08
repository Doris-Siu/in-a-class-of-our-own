import { useState } from "react";
import "./Register.css";

const Register = () => {
	const [username, setUsername] = useState("");
	const [github, setGithub] = useState("");
	const [cohort, setCohort] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(
			`Submitted form data: username=${username}, =${github}, =${cohort}`
		);
	};

	return (
		<div className="body">
			<div>
				<form onSubmit={handleSubmit}>
					<label>
						Github Account:
						<input
							type="text"
							value={username}
							onChange={(e) => setGithub(e.target.value)}
						/>
					</label>
					<label>
						User Name:
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
					<label>
						Cohort Name:
						<input
							type="text"
							value={username}
							onChange={(e) => setCohort(e.target.value)}
						/>
					</label>
					<button type="submit">Register</button>
				</form>
			</div>
		</div>
	);
};
export default Register;
