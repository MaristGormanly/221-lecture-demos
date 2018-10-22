function topScore(name, score, date) {
	this.playerName = name;
	this.playerScore = score;
	this.playerDate = date;
}

var topScore1 = new topScore('brian', 2, '2018/09/27');
var topScore2 = new topScore('Sally', 20, '2018/09/27');
var topScore3 = {playerName: "Charlie", playerScore: 10, playerDate: '2018/09/27'}

var topScores = [];
topScores.push(topScore1);
topScores.push(topScore2);
topScores.push(topScore3);

//console.log(topScores);
window.addEventListener('load', function() {
	var theList = document.getElementById('topTenList');
	/*
	for(el in topScores) {
		//console.log(topScores[el].playe;rName);
		theList.innerHTML += "Player Name: " + topScores[el].playerName + "<br />";
	}*/
	theList.innerHTML = "";
	topScores.forEach((anything) => theList.innerHTML += "Player Name: " + anything.playerName + "<br />");
});
