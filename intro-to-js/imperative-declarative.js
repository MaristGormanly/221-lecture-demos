var numbers = [1,2,3,4,5];
var doubled = [];

// Imperative: Create a value in doubled array for each in numbers
// that contains the doubled value of the corrisponding value in
// numbers
for(var i=0; i<numbers.length; i++) {
	doubled.push(numbers[i] * 2);
}
console.log("numbers: " + numbers);
console.log("doubled: " + doubled);




var numbers = [2,3,4,5,6];
var doubled = [];

// Declarative: accomplishes the same thing as the imperative code
var doubled = numbers.map(function(n){return n*2});  // here is a more complete version

//var doubled = numbers.map(n => n * 2); // simple version

console.log("numbers: " + numbers);
console.log("doubled: " + doubled);


// here is a more complete version
var doubled = numbers.map(function(n){return n*2});
