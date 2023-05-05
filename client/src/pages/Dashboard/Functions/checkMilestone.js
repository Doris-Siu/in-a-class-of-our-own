const BEYOND_SCORE = 3;
const AT_SCORE = 2;
const BEHIDE_SCORE = 1;

const getFactorScore = (actualScore, atMilestoneScore) =>
	actualScore > atMilestoneScore
		? BEYOND_SCORE
		: actualScore === atMilestoneScore
		? AT_SCORE
		: BEHIDE_SCORE;

const getFinalScore = (actualScoreArr, atMilestoneScoreArr) => {
	console.log(actualScoreArr);
	if (!actualScoreArr || !atMilestoneScoreArr) {
		console.error("array expected");
		return null;
	}
	if (actualScoreArr.length != atMilestoneScoreArr.length) {
		console.error("length mismatch");
		return null;
	}
	let length = actualScoreArr.length;
	let totalScore = 0;
	for (let i = 0; i < length; i++) {
		totalScore += getFactorScore(actualScoreArr[i], atMilestoneScoreArr[i]);
	}
	return getFactorScore(totalScore / length, AT_SCORE);
};
export default getFinalScore;
