// game setup
var currentScreen = 0;

/**
 * Manages api calls for game screens. Makes Async call to node back end based upon
 * value in currentScreen.
 *
 * @param screenNumber: If passed will set current value of currentScreen to passed value
 * and screen will be loaded.
 *
 * If screenNumber is not passed, then the current value of currentScreen will be used.
 */
 function gameScreen(screenNumber) {
    if(screenNumber) {
        currentScreen = screenNumber;
    }
    var gameContainer = document.getElementById("gameContainer");

    console.log("requesting page: /game/getNewGameScreen/" + currentScreen);

    // make async call to server to get requested gameScreen html
    fetch('/api/setup/screen/' + currentScreen).then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            return;
        }

        response.text().then(function(data) {
            // send the html returned back to the
            //console.log("received back: " + data);
            gameContainer.innerHTML = data;

            if(currentScreen == 4) {
                // get the current game data to populate the page
				//showSettings();
                
            }
        })
    });

}

gameScreen(currentScreen);

document.getElementById("prevButton").addEventListener("click", () => {
    currentScreen--;
    if(currentScreen < 0) currentScreen = 0;
    gameScreen(currentScreen);
});
document.getElementById("nextButton").addEventListener("click", () => {
    currentScreen++;
    if(currentScreen > 4) currentScreen = 4;
    gameScreen(currentScreen);
});