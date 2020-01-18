var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadPromise);

function myRandomPromise(message) {
	return new Promise(function(succeed, fail) {
		var randomNumber = Math.floor(Math.random() * 10);
		if(randomNumber > 3) {
			var content = "<h1>Success!</h1>"
				+"<h3>Random Number: " + randomNumber +" </h3><p>Your message was: " + message
				+ "</p><p>It was delivered because " + randomNumber + " > 3</p>";
			succeed(content);
		}
		else {
			var content = "<h1>Fail!</h1><p>Your message was: " + message
				+ "</p><p>It was not delivered because " + randomNumber + " <= 3</p>";
			fail(content)
		}
	});
}

function loadPromise() {
	var mp = new myRandomPromise("Hello Promise!");
	mp.then(
		function(data) {
			console.log(data);
			updateDiv(data);
		},
		function(data) {
			console.log(data);
			updateDiv(data);
		}
	);
}



function updateDiv(content) {
	var demoDiv = document.getElementById('demo');
	demoDiv.innerHTML = content;
}
