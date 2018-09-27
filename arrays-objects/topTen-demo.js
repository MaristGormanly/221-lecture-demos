function topScore(inName, inScore, inDate) {
	/*
		This object forces the type, we are 
		guaranteed to have date type for the dateEarned
		and integers for the player score
	*/
	this.playerName = inName;
	this.playerScore = parseInt(inScore);
	this.dateEarned = new Date(inDate);
}

var topScores = [];
var topScore1 = new topScore('Brian', 2, '2018/09/27');
var topScore2 = new topScore('Charlse', 39, '2018/09/27');
var topScore3 = {playerName: 'Harry', playerScore: 4, dateEarned: '2018/09/26'};
topScores.push(topScore1);
topScores.push(topScore2);
topScores.push(topScore3);

window.addEventListener("load", function() {
	var topTenList = document.getElementById('topTenList');
	for(el in topScores) {
		topTenList.innerHTML += topScores[el].playerName += "<br />";
	}
	
})