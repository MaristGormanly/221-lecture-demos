
function myFunction(price) {
	return new Promise(function(resolve, reject) {
		if(price > 2) reject("This failed!");

		setTimeout(function() {
			resolve(price + 1);
		}, 300);
	});
}

myFunction(1)
.then(function(newPrice) {
	console.log(newPrice);
}).catch(function(error) {
	console.log(error);
})



/*
// static Promise
function createPrice(price, delay) {
	return new Promise(function(resolve, reject) {
		if(price > 100) reject("This failed!");

		setTimeout(function() {
			resolve(price + 1);
		}, delay);
	});
}

//createPrice(5, 1000).then(function(rPrice) {console.log(rPrice)});
*/

// without chaining, has nested resolve and reject handling
/*
var promises = [createPrice(3, 1100).then((resolvedPrice) => resolvedPrice), createPrice(5, 1600).then((resolvedPrice) => resolvedPrice)];
Promise.all(promises).then(function(resolvedPromises) {
	console.log(resolvedPromises);
})
*/

// now with chaining (resolve and reject handled at the bottom of the chain)
/*
var promises = [createPrice(3, 1100), createPrice(105, 1300)];

Promise.all(promises).then(function(resolvedPromises) {
	console.log(resolvedPromises);
}).catch(function(error) {
	console.log(error);
})
*/
