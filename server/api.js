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
	try{
		db.query(str,[query.cohortname])
		.then((result) => res.send(result));
	}catch(error){
			logger.debug(error);
		}
});
export default router;
