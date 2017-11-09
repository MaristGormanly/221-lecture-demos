const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json({ type: 'application/json' }));

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
