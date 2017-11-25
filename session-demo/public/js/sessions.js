function getAllUsers() {
    fetch('/api/users').then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            return;
        }
        response.json().then(function(data) {  
			var userHtml ="<ol>";
            for(i in data) {
            	userHtml += "<li id='" + data[i].id + "'>" + data[i].email + "</li>";
            }  
			userHtml += "</ol>";
			document.getElementById('users').innerHTML = userHtml;
        });
    });
}

function logIn(userId) {
	// set the cookie!
	var now = new Date();
	var EXPIRE_TIME = 60000; // 1 Minute
	now.setTime(now.getTime() + EXPIRE_TIME);
	document.cookie = "userId=" + userId +";expires=" 
		+ now.toUTCString() + ";";
    window.location='/secure';
}

getAllUsers();

function userClick() {
	var targetElement = event.target || event.srcElement;
	logIn(targetElement.id);
}

var usersEl = document.getElementById('users');
usersEl.addEventListener("click", userClick)