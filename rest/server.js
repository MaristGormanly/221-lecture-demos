const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json({ type: 'application/json' }));

var users = require('./controllers/userController');


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})



/* 1
app.route('/api/users')
	.get(users.getUsers)
	.post(users.saveUser)

*/

/* 2
app.route('/api/users/:userId')
	.get(users.getUser)
	.delete(users.deleteUser)
	.patch(users.updateUser)
*/


