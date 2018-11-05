var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadPromise2);



function loadDoc() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", false);
	req.send(null);
	console.log(req.responseText);
	updateDiv(req.responseText);
}

function loadDoc2() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", true);
	req.addEventListener("load", function () {
		if(req.status < 400) {
			updateDiv(req.responseText);
		}
	});
	req.send(null);
}

function loadPromise() {
	fetch("ajax_info_fetch.txt").then(
		function(response) {
			response.text().then(function(data) {
					console.log('success! ' + data);
					updateDiv(data);
			});
		},
		function() {
			console.log('failure of ajax_info.txt call!');
		}
	);
}

function loadPromise2() {
	var mp = new myPromise("/notbrian");
	mp.then(
		function(data) {
			console.log(data);
		},
		function(data) {
			console.log(data);
		}
	);
}

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

function updateDiv(content) {
	var demoDiv = document.getElementById('demo');
	demoDiv.innerHTML = content;
}
