import { useState, useEffect } from "react";
import "./Register.css";
import bannerImg from "../../Assets/register.jpg";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const codeParam = urlParams.get("code");
	urlParams.set("code", null);
	localStorage.setItem("githubAuthCode", codeParam);

	const [username, setUsername] = useState("");
	const [github, setGithub] = useState("");
	const [cohort, setCohort] = useState("");
	const [codewars, setCodewars] = useState("");
	const [loading, setloading] = useState(true);
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

	const getAccessToken = async () => {
		try {
			let result = await fetch("api/getAccessToken?code=" + codeParam)
				.then((response) => response.json())
				.then((data) => {
					return data.access_token;
				});
			return result;
		} catch (err) {
			console.log(err);
		}
	};

	const getUserData = async () => {
		try {
			let result = await fetch("api/getUserData", {
				method: "GET",
				headers: {
					Authorization: "Bearer " + (await getAccessToken()),
				},
			})
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
			return result;
		} catch (err) {
			console.log(err);
		}
	};
	const getTrainee = async () => {
		try {
			let userData = await getUserData();

			let result = await fetch("api/trainee/" + userData.login)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});

			return result;
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const handleFetchData = async () => {
			return await getTrainee();
		};
		handleFetchData().then((result) => {
			if (result.length > 0) {
				setUsername("test");
			}
			setloading(false);
		});
	});
	if (loading) {
		return <div>Loading...</div>;
	}
	if (username == "test") {
		return <Navigate to="/dashboard"></Navigate>;
	} else {
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
};
export default Register;
