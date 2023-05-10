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
	db
		.query("SELECT * FROM trainee")
			.then((result) => res.send(result.rows));
	}catch(error){
			logger.log(error);
			res.status(500);
		}
});

router.post("/trainee", (req, res) => {
	const newTrainee = req.body;
	if (!newTrainee.githubusername){
		res.send({ result: "failure", message: "Trainee could not be saved, Github user name required" });
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
		} catch(error){
			logger.log(error);
			res.status(500);
		}
		}
});

// cohorts table
router.get("/cohorts", (req, res) => {
	try{
	db.query("SELECT * FROM cohorts")
		.then((result) => res.send(result.rows));
		} catch(error){
			logger.log(error);
			res.status(500);
		}
});

router.post("/cohorts", (req, res) => {
	const query = req.body;
	const str = "INSERT INTO cohorts (cohortname) VALUES ($1) RETURNING id";
	try {
		db.query(str,[query.cohortname])
		.then((result) => res.send(result));
	} catch(error){
		logger.debug(error);
		}
});

// extracted data table
router.get("/extracteddata", (req, res) => {
	try {
	db
		.query("SELECT * FROM extracteddata")
			.then((result) => res.send(result.rows));
	}catch(error){
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

const extractData = async ()=> {
	const trainees = await getTrainees();

	const today = new Date();

	trainees.forEach(async (trainee)=> {
		const [rank, points] = await getCodewarInfo(trainee.codewarsusername);
		const githubPrs = await getGithubInfo(trainee.githubusername);
		insertExtractedData(
			trainee.id,
			rank,
			points,
			githubPrs,
			today
		);
	});
};

const getTrainees = async () => {
	const results = await db.query("SELECT * FROM trainee");
	return results.rows;
};

const getCodewarInfo = async (userName) => {
	const endpoint = "http://www.codewars.com/api/v1/users/" + userName;
	try{
		const response =  await fetch(endpoint);
		logger.debug(response);
		const profile = await response.json();
		logger.debug(profile);
		return [
			Math.abs(profile.ranks.overall.rank),
			profile.ranks.languages.javascript.score,
		];
	} catch(error){
		return [9, 0];
	}
};
const getGithubInfo = async (userName) => {
	// const endpoint = `https://api.github.com/users/${userName}`;
	// the following api for github prs need to be adjusted  and filtered for code your future prs for each trainee, Then comment out the above fetching
	const endPointForGithubPrs = `https://api.github.com/search/issues?q=is%3Apr+author%3A${userName}`;
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
	try{
	db.query("SELECT * FROM milestone")
			.then((result) => res.send(result.rows));
		} catch(error){
			logger.log(error);
			res.status(500);
		}
});

router.post("/milestone", (req, res) => {
	const newData = req.body;
	if (!newData.modulename || !newData.codewarsrank || !newData.githubprs, !newData.codewarsjspoints){
		res.send({ result: "failure", message: "New data could not be saved, some input required" });
	} else {
		try {
			db
			.then((result) => res.send(result.rows));
	const addNew =
		"INSERT INTO milestone (modulename, date, codewarsrank, githubprs, codewarsjspoints) VALUES ($1, $2, $3, $4, $5) RETURNING id";

	db.query(addNew, [
        newData.modulename,
		newData.date,
		newData.codewarsrank,
        newData.githubprs,
		newData.codewarsjspoints,
	]).then((result) => res.send(result));
		} catch(error){
			logger.log(error);
			res.status(500);
		}
	}
});

export default router;
