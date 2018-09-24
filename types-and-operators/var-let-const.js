// shows the difference between var and no declared scope (global property)
var testVar = "orginal testVar";
testNothing = "orginal testNothing";
console.log("1: " + testVar);
console.log("1: " + testNothing);




function scopeTester() {
	var testVar = "changed original testVar";
	var localTestVar = testVar + " addition";
	testNothing = "changed testNothing";

	console.log("2: " + testVar);
	console.log("2: " + localTestVar);
	console.log("2: " + testNothing);
}
scopeTester();

//console.log("3: " + testVar);gender
//console.log("3: " + testNothing);



// shows the difference between var and let (let has block level scope)
//console.log("This is level 1");

if(true) {
	//console.log("True was true! Bet you did not see that coming!");
	var testVar = "This is a var";
	let testLet = "This is a let";
}

//console.log("var test:" + testVar);
//console.log("let test:" + testLet);





// shows the difference between let and const
let testLet = "original let";
const TEST_CONST = "original const";

//console.log("1: " + testLet);
//console.log("1: " + TEST_CONST);

testLet = "changed let";
//TEST_CONST = "changed const";

//console.log("2: " + testLet);
//console.log("2: " + TEST_CONST);
