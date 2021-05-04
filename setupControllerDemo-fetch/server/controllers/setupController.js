// game screen content
exports.startGameScreens = [];

var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
         + "<p>You may:</p>"
         + "<ol id=\"setupQuestions1\" >"
         + "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
         + "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
         + "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
         + "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
         + "</ol>"
         + "<div id=\"selectedOption\">What is your choice?</div>";

var startGame2 = "<p>What is the first name of the wagon leader?</p>"
         + "Leader Name: <input id=\"player0\" />"
         + "<input type=\"button\" class=\"button-1\" id=\"page1sub\" value=\"Next\" />";

var startGame3 = "<p>What are the first names of the other members of your party?</p>"
         + "Player Name: <input id=\"player1\" /><br />"
         + "Player Name: <input id=\"player2\" /><br />"
         + "Player Name: <input id=\"player3\" /><br />"
         + "Player Name: <input id=\"player4\" /><br />"
         + "<input type=\"button\" class=\"button-1\" id=\"page2sub\" value=\"Next\" />";

var startGame4 = "<p>It is 1848.  Your jumping off place for oregon is Independence, Missouri.  You must decide which month to leave Independence.</p>"
         + "<ol id=\"setupQuestions2\" >"
         + "<li id=\"marchItem\">March</li>"
         + "<li id=\"aprilItem\">April</li>"
         + "<li id=\"mayItem\">May</li>"
         + "<li id=\"juneItem\">June</li>"
         + "<li id=\"julyItem\">July</li>"
         + "</ol>"
         + "<div id=\"selectedOption\">What is your choice?</div>";

var startGame5 = "<p>Congradulations! You are ready to start on your Journey!</p>"
         + "<p>Here are settings you selected for the game</p>"
         + "<div id=\"returnData\">"
         + "Wagon Leader: <span id=\"rPlayer1Name\"></span><br />"
         + "Memeber: <span id=\"rPlayer2Name\"></span><br />"
         + "Memeber: <span id=\"rPlayer3Name\"></span><br />"
         + "Memeber: <span id=\"rPlayer4Name\"></span><br />"
         + "Memeber: <span id=\"rPlayer5Name\"></span><br />"
         + "Your profession: <span id=\"rProfession\"></span><br />"
         + "Current bank account: <span id=\"rMoney\"></span><br />"
         + "Month leaving: <span id=\"rMonth\"></span><br />"
 		+ "<h2 id=\"pressSpace\">Press the space for the main menu.</h2>"
         + "</div>";

exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2);
exports.startGameScreens.push(startGame3);
exports.startGameScreens.push(startGame4);
exports.startGameScreens.push(startGame5);


exports.getgameScreen = function(req, res) {
	console.log("testing!");
	var gameScreen = exports.startGameScreens[req.params.id];

 	res.setHeader('Content-Type', 'application/json');
    res.send(gameScreen);
};