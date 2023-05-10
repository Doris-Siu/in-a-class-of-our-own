-- CreateTable
CREATE TABLE trainee (
    "id" SERIAL PRIMARY KEY,
    "githubUserName" VARCHAR (50) NOT NULL,
    "codewarsUserName" VARCHAR (50),
    "displayName" VARCHAR (50),
    "cohort" VARCHAR (50)
);

-- CreateTable
CREATE TABLE extractedData (
    "id" SERIAL PRIMARY KEY,
    "traineeID" INTEGER NOT NULl,
    "date" DATE,
    "codewarsrank" INTEGER NOT NULL,
    "codewarsjspoints" INTEGER NOT NULL,
    "githubPrs" INTEGER NOT NULL,
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
    "moduleName" VARCHAR (50) NOT NULL,
    "date" DATE,
    "codewarsRank" INTEGER NOT NULL,
    "githubPrs" INTEGER NOT NULL, 
    "codewarsJsPoints" INTEGER NOT NULL
);

CREATE TABLE cyfrepos(
    "id" SERIAL PRIMARY KEY,
    "milestoneid" INTEGER NOT NULl,
    "reponame" VARCHAR (250) NOT NULL,
    FOREIGN KEY (milestoneid) REFERENCES milestone (id)
);
