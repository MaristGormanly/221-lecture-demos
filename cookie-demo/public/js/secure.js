function getUserById(userId) {
	if(userId >= 0) { 
    	fetch('/api/users/' + userId).then(function(response) {
      		if (response.status !== 200) {
            	console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            	return;
        	}
        	response.json().then(function(data) {  
				document.getElementById('greeting').innerHTML = "Secure Area! Welcome " + data.firstName + "!";
        	});
    	});
	}
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

// get the userId from the cookie on the client side
var userId = getCookie("userId");
getUserById(userId);

