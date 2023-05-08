import { useState } from "react";
import "./Register.css";

const Register = () => {
	const [username, setUsername] = useState("");
	const [github, setGithub] = useState("");
	const [cohort, setCohort] = useState("");
	const [codewars, setCodewars] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(
			`Submitted form data: username=${username}, =${github}, =${cohort}`
		);
	};

	return (
		<div className="body">
			<div className="banner">
				<img src="../../Assets/register.jpg" alt="register" />
			</div>
				<form onSubmit={handleSubmit}>
					<h3>Welcome To The Class Of Our Own App</h3>
                    <p>Plaese fill all of the fields:</p>
					<label>
						Github Account:
						<input
							type="text"
							value={github}
							onChange={(e) => setGithub(e.target.value)}
                            required
						/>
					</label>
					<label>
						Codewars Account:
						<input
							type="text"
							value={codewars}
							onChange={(e) => setCodewars(e.target.value)}
                            required
						/>
					</label>
					<label>
						User Name:
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
                            required
						/>
					</label>
					<label>
						Cohort Name:
						<input
							type="text"
							value={cohort}
							onChange={(e) => setCohort(e.target.value)}
                            required
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
		</div>
	);
};
export default Register;
