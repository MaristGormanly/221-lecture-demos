function User(id, first, last, email, password) {
	this.id = id;
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.password = password;
}

function userSession() {
	this.uuid = guid();
	this.clickCount = 0;
	this.lastRequestTime = new Date.now();
}
let sessions = [];

exports.checkSession = function(sessionId) {
	if(sessions.length > 0) {
		for(let i in sessions) {
			if(sessions[i].uuid == sessionId) {
				return session[i];
			}
		}
	}
	return null;
}

let users = [];

let user1 = new User(0, "Brian", "Gormanly", "brian.gormanly@marist.edu", "letmein");
let user2 = new User(1, "Happy", "Gilmore", "happy.gilmore@gmail.com", "backnine");
let user3 = new User(2, "Harry", "Truman", "htruman@wh.gov", "pres1");
let user4 = new User(3, "George", "Washinton", "gw@wh.gov", "pres2");
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

exports.getUsers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.saveUser = function(req, res) {
	let newUser = new User(users.length, req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	users.push(newUser);
	res.setHeader('Content-Type', 'application/json');
	res.send(req.body);
}

exports.getUser = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.userId]);
}

exports.deleteUser = function(req, res) {
	users.splice(req.params.userId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.updateUser = function(req, res) {
	// get the existing user from the array
	let updatedUser = users[req.params.userId];

	// check to see what has been passed and update the local copy
	if(req.body.firstName)
		updatedUser.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedUser.lastName = req.body.lastName;
	if(req.body.email)
		updatedUser.email = req.body.email;
	if(req.body.password)
		updatedUser.password = req.body.password;

	// save the local copy of the user back into the array
	users[req.params.userId] = updatedUser;

	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
}
