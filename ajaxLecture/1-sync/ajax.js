var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadDoc);

function loadDoc() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", false);
	req.send(null);
	console.log(req.responseText);
	updateDiv(req.responseText);
}

function updateDiv(content) {
	var demoDiv = document.getElementById('demo');
	demoDiv.innerHTML = content;
}
