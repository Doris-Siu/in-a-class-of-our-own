import { Router } from "express";

import logger from "./utils/logger";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// trainee table
router.get("/trainee", (req, res) => {
	try {
		db.query("SELECT * FROM trainee").then((result) => res.send(result.rows));
	} catch (error) {
		logger.log(error);
		res.status(500);
	}
});

//get specific trainee/ check if this trainee already exists
router.get("/trainee/:githubusername", (req, res) => {
    try {
        db.query("SELECT * FROM trainee WHERE githubusername = $1", [
            req.params.githubusername,
        ]).then((result) => {
            res.send(result.rows);
        });
    } catch (error) {
        logger.log(error);
        res.status(500);
    }
});

router.post("/trainee", (req, res) => {
	const newTrainee = req.body;
	if (!newTrainee.githubusername) {
		res.send({
			result: "failure",
			message: "Trainee could not be saved, Github user name required",
		});
	} else {
		try {
			const addNew =
				"INSERT INTO trainee (githubusername, codewarsusername, displayname, cohort) VALUES ($1, $2, $3, $4) RETURNING id";

			db.query(addNew, [
				newTrainee.githubusername,
				newTrainee.codewarsusername,
				newTrainee.displayname,
				newTrainee.cohort,
			]).then((result) => res.send(result));
		} catch (error) {
			logger.log(error);
			res.status(500);
		}
	}
});

// cohorts table
router.get("/cohorts", (req, res) => {
	try {
		db.query("SELECT * FROM cohorts").then((result) => res.send(result.rows));
	} catch (error) {
		logger.log(error);
		res.status(500);
	}
});

router.post("/cohorts", (req, res) => {
	const query = req.body;
	const str = "INSERT INTO cohorts (cohortname) VALUES ($1) RETURNING id";
	try {
		db.query(str, [query.cohortname]).then((result) => res.send(result));
	} catch (error) {
		logger.debug(error);
	}
});

// extracteddata table
router.get("/extracteddata", (req, res) => {
	try {
		db.query("SELECT * FROM extracteddata").then((result) =>
			res.send(result.rows)
		);
	} catch (error) {
		logger.log(error);
		res.status(500);
	}
});

// post request for extracteddata table and using fetch request to github and codewars api
router.post("/extracteddata", (req, res) => {
	try {
		extractData().then((result) => res.send(result));
	} catch (error) {
		logger.log(error);
		res.status(500).send(error);
	}
});

const extractData = async () => {
	const trainees = await getTrainees();

	const today = new Date();

	trainees.forEach(async (trainee) => {
		const [rank, points] = await getCodewarInfo(trainee.codewarsusername);
		const githubPrs = await getGithubInfo(trainee.githubusername);
		insertExtractedData(trainee.id, rank, points, githubPrs, today);
	});
};

const getTrainees = async () => {
	const results = await db.query("SELECT * FROM trainee");
	return results.rows;
};

const getCodewarInfo = async (userName) => {
	const endpoint = "http://www.codewars.com/api/v1/users/" + userName;
	try {
		const response = await fetch(endpoint);
		logger.debug(response);
		const profile = await response.json();
		logger.debug(profile);
		return [
			Math.abs(profile.ranks.overall.rank),
			profile.ranks.languages.javascript.score,
		];
	} catch (error) {
		return [9, 0];
	}
};
const getGithubInfo = async (userName) => {
	// const endpoint = `https://api.github.com/users/${userName}`;
	// the following api for github prs need to be adjusted  and filtered for code your future prs for each trainee, Then comment out the above fetching
	// const endPointForGithubPrs = `https://api.github.com/search/issues?q=is%3Apr+author%3A${userName}`;

	const endPointForGithubPrs = `https://api.github.com/search/issues?per_page=100&q=is%3Apr+author%3A${userName}`;
	try {
		// count function
		const countByUrl = (data) => {
			return data.filter((obj) =>
				obj.pull_request.url.includes("CodeYourFuture")
			).length;
		};
		const response = await fetch(endPointForGithubPrs);
		logger.debug(response);

		const pullreq = await response.json();
		const cyf_count = countByUrl(pullreq.items);
		logger.debug(cyf_count);
		return cyf_count;
	} catch (error) {
		return 0;
	}
};

const insertExtractedData = (
	traineeid,
	codewarsrank,
	codewarsjspoints,
	githubprs,
	timestamp
) => {
	const addNew =
		"INSERT INTO extracteddata (traineeid, codewarsrank, codewarsjspoints, githubprs, timestamp) VALUES ($1, $2, $3, $4, $5) RETURNING id"; // Need to add constraint for traineeid
	return db.query(addNew, [
		traineeid,
		codewarsrank,
		codewarsjspoints,
		githubprs,
		timestamp,
	]);
};

// milestones table
router.get("/milestone", (req, res) => {
	try {
		db.query("SELECT * FROM milestone").then((result) => res.send(result.rows));
	} catch (error) {
		logger.log(error);
		res.status(500);
	}
});

router.post("/milestone", (req, res) => {
	const newData = req.body;
	if (
		(!newData.modulename || !newData.codewarsrank || !newData.githubprs,
		!newData.codewarsjspoints)
	) {
		res.send({
			result: "failure",
			message: "New data could not be saved, some input required",
		});
	} else {
		try {
			db.then((result) => res.send(result.rows));
			const addNew =
				"INSERT INTO milestone (modulename, date, codewarsrank, githubprs, codewarsjspoints) VALUES ($1, $2, $3, $4, $5) RETURNING id";

			db.query(addNew, [
				newData.modulename,
				newData.date,
				newData.codewarsrank,
				newData.githubprs,
				newData.codewarsjspoints,
			]).then((result) => res.send(result));
		} catch (error) {
			logger.log(error);
			res.status(500);
		}
	}
});

// Add user details (input) inside database
router.post("/register", async (req, res) => {
	try {
		const { username, github, cohort, codewars } = req.body;
		await db.query(
			"INSERT INTO trainee (displayname, githubusername, cohort, codewarsusername) VALUES ($1, $2, $3, $4)",
			[username, github, cohort, codewars]
		);
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
});



router.get("/getAccessToken", async function (req, res) {
	// console.log(req.query.code);
	const params =
		"?client_id=" +
		process.env.CLIENT_ID +
		"&client_secret=" +
		process.env.CLIENT_SECRET +
		"&code=" +
		req.query.code;

	await fetch("https://github.com/login/oauth/access_token" + params, {
		method: "POST",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => res.json(data));
});

//get user data
router.get("/getGithubUserData", async function (req, res) {
	req.get("Authorization"); //bearer access token to be passed
	await fetch("https://api.github.com/user", {
		method: "GET",
		headers: {
			Authorization: req.get("Authorization"),
		},
	})
		.then((response) => response.json())
		.then((data) => res.json(data));
});


// milestone status endpoint and related functions -- VERY IMPORTANT COMPILATION MULTIPLE TABLES AND SEND DATA TO FRONTEND
router.get("/milestonestatus/:githubusername", async (req, res) => {
	try {
		const gitUser = req.params.githubusername;
		const cyfMilestone = await getLastestCyfMilestone();
		const latestFromExtracteddata = await getLatestExtractedData();

		// ADDED filter by github name from latestExtracteddata array which contains all trainees
		const filterGitUserFromLastestExtracteddata =
			latestFromExtracteddata.filter(
				(gitUserName) => gitUserName.githubusername === gitUser
			);
		// ADDED could we send an array of 3 items ??
		const sendList = [
			latestFromExtracteddata,
			filterGitUserFromLastestExtracteddata,
			cyfMilestone,
		];
		res.send(sendList);
	} catch (error) {
		logger.log(error);
		res.status(500).send(error);
	}
});

// Function to get latest cyf milestone table
const getLastestCyfMilestone = async () => {
	const results = await db.query("SELECT MAX(date::date) AS latest_date FROM milestone");
	const date = results.rows[0].latest_date;
	const msResult = await db.query("SELECT * FROM milestone WHERE date = $1", [date]);
	return msResult.rows[0];
};

// Following fucntion can be useful to getTraineeByName fucntion
// const getTraineeByName = async (githubName) => {
// 	const results = await db.query(
// 		"SELECT t.githubusername, e.* FROM extracteddata as e inner join trainee as t on e.traineeid = t.id WHERE t.githubusername = $1",[githubName]);
// 	return results.rows.splice(-1);
// };

// Function to get latest info from exracteddata table
const getLatestExtractedData = async () => {
	const results = await db.query(
		"SELECT MAX(timestamp) AS latest_date FROM extracteddata"
	);
	const date = results.rows[0].latest_date;
	const msResult = await db.query(
		"SELECT t.*, e.* FROM extracteddata as e inner join trainee as t on e.traineeid = t.id WHERE timestamp = $1",
		[date]
	);
	return msResult.rows;
};


// refeshing extracteddata table every 24 hours
setInterval(extractData, 1000 * 60 * 60 * 24);

export default router;

//define client_id from server
router.get("/clientId", (_, res) => {
	res.json({ client_id: process.env.CLIENT_ID });
});
