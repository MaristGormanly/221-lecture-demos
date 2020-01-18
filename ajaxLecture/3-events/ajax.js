var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadDoc);


function loadDoc() {
	var req = new XMLHttpRequest();
	req.open("GET", "ajax_info.txt", true);
	req.addEventListener("load", function () {
		if(req.status < 400) {
			updateDiv(req.responseText);
		}
		else {
			updateDiv("Document Not Found!");
		}
	});


	req.addEventListener("progress", function () {
			alert("Progress!");
	});
	req.send(null);
	
}

function updateDiv(content) {
	var demoDiv = document.getElementById('demo');
	demoDiv.innerHTML = content;
}
