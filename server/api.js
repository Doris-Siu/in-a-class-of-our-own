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
	db.query("")
		.then((result) => res.send(result.rows))

		.catch((error) => {
			logger.log(error);
			res.status(500);
		});
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
