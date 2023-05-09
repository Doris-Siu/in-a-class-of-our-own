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

// extracted data table
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

// post request for extracteddata table
router.post("/extracteddata", (req, res) => {
	const newData = req.body;
	if (
		!newData.codewarsRank ||
		!newData.codewarsjspoints ||
		!newData.githubprs
	) {
		res.send({
			result: "failure",
			message: "New data could not be saved, some input required",
		});
	} else {
		try {
			// constrain coded
			const getTraineeId = "SELECT name FROM trainee WHERE id = $1";
			db.query(getTraineeId, [newData.traineeid]).then((result) =>
				res.send(result)
			);
			// constrain coded upto here
			const addNew =
				"INSERT INTO extracteddata (trineeid, date, codewarsrank, codewarsjspoints, githubprs) VALUES ($1, $2, $3, $4, $5) RETURNING id"; // Need to add constraint for traineeid
			db.query(addNew, [
				//newData.trineeid, ?? OR the following
				getTraineeId, // Need opinion
				newData.date,
				newData.codewarsrank,
				newData.codewarsjspoints,
				newData.githubprs,
			]).then((result) => res.send(result));
		} catch (error) {
			logger.log(error);
			res.status(500);
		}
	}
});

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

export default router;
