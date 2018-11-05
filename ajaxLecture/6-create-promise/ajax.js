var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadPromise);

function myPromise(url) {
	return new Promise(function(succeed, fail) {
		if(url == "/brian") {
			var content = "delivered as a promise! " + url;
			succeed(content);
		}
		else {
			fail("so sorry! This failed!")
		}
	});
}

function loadPromise() {
	var mp = new myPromise("/notbrian");
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
