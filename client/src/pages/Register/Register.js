import { useState, useEffect } from "react";
import "./Register.css";
import bannerImg from "../../Assets/register.jpg";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../Components/context";
import loadingGif from "../../Assets/loading.gif";


const Register = () => {
	const { setGlobalgithubName } = useGlobalContext();
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const codeParam = urlParams.get("code");
	urlParams.set("code", null);
	localStorage.setItem("githubAuthCode", codeParam);

	//this variable refers to the github username data fetched from gitHub before registration
	//(i.e. pressing the submit button)
	const [github, setGithub] = useState("");

	const [codewars, setCodewars] = useState("");
	const [username, setUsername] = useState("");
	const [cohort, setCohort] = useState("");

	const [loading, setloading] = useState(true);

	//this variable refers to the github username stored in the db
	const [traineeGitHubName, setTraineeGitHubName] = useState("");

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
			setGlobalgithubName(github);
			setUsername("");
			setGithub("");
			setCohort("");
			setCodewars("");
			//redirect the user to dashboard after registration
			window.location.assign("/dashboard");
		} catch (err) {
			console.log(err);
		}
	};

	const getAccessToken = async () => {
		try {
			let result = await fetch("api/getAccessToken?code=" + codeParam)
				.then((response) => response.json())
				.then((data) => {
					localStorage.setItem("accessToken", data.access_token);
					return data.access_token;
				});
			return result;
		} catch (err) {
			console.log(err);
		}
	};

	const getGithubUserData = async () => {
		try {
			let result = await fetch("api/getGithubUserData", {
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

	function presetGithubInput(userData) {
		setGithub(userData.login);
	}

	const getTrainee = async () => {
		try {
			let userData = await getGithubUserData();
			// set to global context
			setGlobalgithubName(userData.login);
			presetGithubInput(userData);
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
		//after redirected to register page, not yet registered
		if (traineeGitHubName == "") {
			const handleFetchData = async () => {
				return await getTrainee();
			};

			if (github == "") {
				handleFetchData().then((result) => {
					//check if this trainee has registered and existed in the db
					if (result.length > 0) {
						//means registered
						setTraineeGitHubName(result[0].githubusername);
					}
					setloading(false);
				});
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (loading) {
		return (
			<div className="loadingPage">
				<img src={loadingGif} alt="loading" className="loadingStatus" />
			</div>
		);
	}
	if (traineeGitHubName !== "") {
		// means registered
		return <Navigate to="/dashboard"></Navigate>;
	} else {
		// means if not registered, return the forms below
		return (
			<div className="body">
				<div className="banner">
					<img src={bannerImg} alt="register" />
					<div className="color-overlay">
						<h2>Keep Track Of Your Milestone</h2>
					</div>
				</div>
				<form onSubmit={handleSubmit}>
					<h3>Welcome To The Class Of Our Own App</h3>
					<p>Please fill all the fields below:</p>
					<label>
						Github Username:
						<input
							type="text"
							value={github}
							readOnly={true}
						/>
					</label>
					<label>
						Codewars Username:
						<input
							type="text"
							value={codewars}
							onChange={(e) => setCodewars(e.target.value)}
							required
						/>
					</label>
					<label>
						Preferred Name:
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
