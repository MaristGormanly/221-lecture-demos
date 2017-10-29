var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadPromise2);

function loadPromise() {
	fetch("ajax_info.txt").then(
		function(response) { 
			var text = response.text().then(function(data) {
					alert('success! ' + data);
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
			alert(data);
		},
		function(data) {
			alert(data);
		}
	);
}


function loadDoc() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", false);
	req.send(null);
	alert(req.responseText);
}

function loadDoc2() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", true);
	req.addEventListener("load", function () {
		if(req.status < 400) {
			document.getElementById('demo').innerHTML = req.responseText;
		}
	});
	req.send(null);
}

function myPromise(url) {
	return new Promise(function(succeed, fail) {
		if(url == "/brian") {
			var content = "delivered as a promise! " + url;
			succeed(content);
		}
		else {
			fail("so sorry!")
		}
	});
}