var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadPromise);


function loadPromise() {
	fetch("ajax_info_fetch.txt").then(
		function(response) {
			console.log(response);


			response.text().then(function(resData) {
					console.log('success! \n' + resData);
					updateDiv(resData);
			});
			
		},
		function() {
			console.log('failure of ajax_info.txt call!');
		}
	);
}

function updateDiv(content) {
	var demoDiv = document.getElementById('demo');
	demoDiv.innerHTML = content;
}
