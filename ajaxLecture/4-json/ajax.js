var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadDoc);




function loadDoc() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.json", true);
	req.addEventListener("load", function () {
		if(req.status < 400) {
			var jsonResponse = JSON.parse(req.responseText);
			updateDiv(jsonResponse);
		}
	});
	req.send(null);
}


function updateDiv(content) {
	console.log(content);
	var pName = document.getElementById('pName');
	var cars = document.getElementById('cars');

	pName.innerHTML = content.firstName;
}
