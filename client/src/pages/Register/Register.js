import { useState } from "react";
import "./Register.css";
import bannerImg from "../../Assets/register.jpg";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

async function Register() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const codeParam = urlParams.get("code");
	urlParams.set("code", null);
	localStorage.setItem("githubAuthCode", codeParam);
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [github, setGithub] = useState("");
	const [cohort, setCohort] = useState("");
	const [codewars, setCodewars] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("api/register", {
				username,
				github,
				cohort,
				codewars,
			});
			console.log(res.data);
			setUsername("");
			setGithub("");
			setCohort("");
			setCodewars("");
		} catch (err) {
			console.log(err);
		}
	};
	if (localStorage.getItem("githubAuthCode") != null) {
		const resCheckUser = await axios.get("api/trainee/"+);
		console.log(resCheckUser);
		if (resCheckUser.data.success) {
			return <Navigate to="../dashboard"></Navigate>;
		}
	}
	return (
		<div className="body">
			<div className="banner">
				<img src={bannerImg} alt="register" />
				<div className="color-overlay">
					{" "}
					<h2>Keep Track Of Your Milestone</h2>
				</div>
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
}
export default Register;
