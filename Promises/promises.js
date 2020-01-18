
function myFunction(price) {
	return new Promise(function(resolve, reject) {
		if(price > 2) reject("This failed!");

		setTimeout(function() {
			resolve(price + 1);
		}, 1000);
	});
}

/*
myFunction(5)
.then(function(newPrice) {
	console.log(newPrice);
}).catch(function(error) {
	console.log("my reject " + error);
})



*/
// static Promise



function createPrice(price, delay) {
	return new Promise(function(resolve, reject) {
		if(price > 100) reject("This failed!");

		setTimeout(function() {
			resolve(price + 1);
		}, delay);
	});
}

let promises = [
	createPrice(3, 1800).then((resolvedPrice) => resolvedPrice).catch((error) => console.log(error)),
	createPrice(90, 1100).then((resolvedPrice) => resolvedPrice).catch((error) => console.log(error))
];

Promise.all(promises).then(function(resolvedPromises) {
	console.log(resolvedPromises);
})



/*
createPrice(5, 1000).then(function(rPrice) {console.log(rPrice * 100)});
*/

// without chaining, has nested resolve and reject handling

// now with chaining (resolve and reject handled at the bottom of the chain)

/*
var promises = [createPrice(3, 1100), createPrice(105, 1300)];

Promise.all(promises).then(function(resolvedPromises) {
	console.log(resolvedPromises);
}).catch(function(error) {
	console.log(error);
})
*/
