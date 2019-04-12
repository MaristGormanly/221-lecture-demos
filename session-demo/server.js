const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static('public'))

//var AUTH_TIMEOUT = 5000;

/**
 * HTML views
 */
app.get('/', function (req, res) {
	res.sendFile('views/index.html', {root: __dirname })
})

app.get('/logout', function (req, res) {
	// remove our cookie
	res.clearCookie("userId");
	res.sendFile('views/logout.html', {root: __dirname })
})

app.get('/secure', function (req, res) {
	// check for the userId cookie!
	var cookies = req.headers.cookie;
	var flag = false;
    if(cookies) {
		cookies.split(';').forEach(function(cookie) {
        	var parts = cookie.split('=');
			cookieName = parts[0].trim();
			if(cookieName == 'userId') {
				flag = true;
        		var userId = parts[1];
				console.log("logging in userId " + userId)
				if(userId >= 0) {
					res.sendFile('views/secure.html', {root: __dirname })
				}
				else {
					res.sendFile('views/notAuth.html', {root: __dirname })
				}
			}
    	});
	}
	if(!flag) {
		res.sendFile('views/notAuth.html', {root: __dirname })
	}
})


/**
 * APIs
 */
var users = require('./controllers/userController');

app.route('/api/users')
	.get(users.getUsers)
	.post(users.saveUser)

app.route('/api/users/:userId')
	.get(users.getUser)
	.delete(users.deleteUser)
	.patch(users.updateUser)

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})


/**
 * helper functions
 */
function getUserIdCookie(cookies) {

}
