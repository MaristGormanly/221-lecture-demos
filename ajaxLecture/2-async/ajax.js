var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadDoc);
//changeButton.addEventListener('click', loadDoc2);

// version 1
function loadDoc() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", false);
	req.send(null);
	console.log(req.responseText);
	updateDiv(req.responseText);
}



// version 2
function loadDoc2() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", true);
	req.addEventListener("load", function () {
		if(req.status < 400) {
			console.log(req.responseText);
			updateDiv(req.responseText);
		}
	});
	req.send(null);
}


function updateDiv(content) {
	var demoDiv = document.getElementById('demo');
	demoDiv.innerHTML = content;
}
