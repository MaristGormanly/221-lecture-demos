function createPrice(price, delay) {
	return new Promise(function(resolve, reject) {
		if(price > 100) reject("This failed!");

		setTimeout(function() {
			resolve(price);
		}, delay);
	});
}

// version 1 only success handled
//createPrice(500, 1000).then((rPrice) => alert(rPrice));

// version 2 success and failure handled
//createPrice(500, 1000).then((rPrice) => alert(rPrice), (message) => alert(message));

// version 3: Promise.all :: Will wait for all to return! (longest timeout or first failure)
/*
var promises = [createPrice(300, 500).then((resolvedPrice) => resolvedPrice), createPrice(5, 3000).then((resolvedPrice) => resolvedPrice)];

Promise.all(promises).then(function(resolvedPromises) {
	alert(resolvedPromises);
})
*/


// version 4: Promise.all with chaining (using the same success and failure functions for all)
/*
var promises = [createPrice(3, 1100), createPrice(110, 3000)];

Promise.all(promises).then(function(resolvedPromises) {
	alert(resolvedPromises);
}).catch(function(error) {
	alert(error);
})
*/
