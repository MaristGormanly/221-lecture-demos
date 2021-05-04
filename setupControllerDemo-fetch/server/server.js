const express = require('express');
const app = express();

// required to parse the body of a request (post)
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));

app.use(express.static('client/public'));


app.get('/setup', function (req, res) {
  res.sendFile('setup.html', {root: './client/views' })
})

var setupController = require('./controllers/setupController');

// setup controller routes
app.route('/api/setup/screen/:id')
	.get(setupController.getgameScreen)



app.listen(1337, () => console.log('OregonTrail listening on port 1337!'));
