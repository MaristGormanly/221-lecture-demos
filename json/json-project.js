function myFunction() {
    // call your back end api here
}
myFunction();


/*
function populateSettings(settings) {
	document.getElementById('rPlayer1Name').innerHTML = settings.playerNames[0];
	document.getElementById('rPlayer2Name').innerHTML = settings.playerNames[1];
	document.getElementById('rPlayer3Name').innerHTML = settings.playerNames[2];
	document.getElementById('rPlayer4Name').innerHTML = settings.playerNames[3];
	document.getElementById('rPlayer5Name').innerHTML = settings.playerNames[4];
    document.getElementById('rProfession').innerHTML = settings.playerProfession;
	document.getElementById('rMoney').innerHTML = settings.playerMoney;
	document.getElementById('rMonth').innerHTML = settings.startMonth;
}
*/
























// do not show should be done together on board
/*
 Example 1:


//  /game/getSettings route in oregonTrail.js. (create on board with class)

app.get('/game/getSettings', function(req, res) {
  
  // return as json
  res.setHeader('Content-Type', 'application/json');
  res.send(game.gameSettings);

})

// remembering that game.gameSettings is: 
exports.gameSettings = new gameData();
function gameData() {
        this.playerNames = [];
        this.playerProfession = "";
        this.playerMoney = 0;
        this.startMonth = "";
}

// show how this class (gameData) matches up to the returned json given by the api:
{"playerNames":[],"playerProfession":"","playerMoney":0,"startMonth":""}



/*
 Example 2:


function showSettings() {
    fetch('http://localhost:1337/game/getSettings').then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            return;
        }
        response.json().then(function(data) {  
            populateSettings(data);
            //return data;  
			//alert(data);
        });
    });
}

showSettings();
*/