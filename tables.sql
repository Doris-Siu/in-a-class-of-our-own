-- CreateTable
CREATE TABLE trainee (
    "id" SERIAL PRIMARY KEY,
    "githubusername" VARCHAR (50) NOT NULL,
    "codewarsuserName" VARCHAR (50),
    "displayname" VARCHAR (50),
    "cohort" VARCHAR (50)
);

-- CreateTable
CREATE TABLE extractedData (
    "id" SERIAL PRIMARY KEY,
    "traineeid" INTEGER NOT NULl,
    "timestamp" timestamp,
    "codewarsrank" INTEGER NOT NULL,
    "codewarsjspoints" INTEGER NOT NULL,
    "githubprs" INTEGER NOT NULL,
    FOREIGN KEY (traineeID) REFERENCES trainee(id)
);

-- CreateTable 
CREATE TABLE cohorts (
    "id" SERIAL PRIMARY KEY,
    "cohortname" VARCHAR (50) NOT NULL,
);

-- CreateTable 
CREATE TABLE milestone (
    "id" SERIAL PRIMARY KEY,
    "modulename" VARCHAR (50) NOT NULL,
    "date" DATE,
    "codewarsrank" INTEGER NOT NULL,
    "githubprs" INTEGER NOT NULL, 
    "codewarsjspoints" INTEGER NOT NULL
);

CREATE TABLE cyfrepos(
    "id" SERIAL PRIMARY KEY,
    "milestoneid" INTEGER NOT NULl,
    "reponame" VARCHAR (250) NOT NULL,
    FOREIGN KEY (milestoneid) REFERENCES milestone (id)
);
