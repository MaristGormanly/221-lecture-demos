var myArr = ['tom', 'sue', , 3, 'sally'];

console.log("Array with normal for ------------------------")
for(var i=0; i<myArr.length; i+',+) {
  console.log(myArr[i]);
}


console.log("Array with for-in ------------------------")
for(var el in myArr) {
  console.log(myArr[el]);
}


console.log("Array with foreach ------------------------")
myArr.forEach((x) => console.log(x));

/*
var myObj = {firstName: 'Brian', lastName: 'Gormanly'};

console.log("Object with for-in ------------------------")
for(var x in myObj) {
  console.log(myObj[x]);
}

console.log("Object with foreach ------------------------")
/*
As of JavaScript 1.8.5 you can use Object.keys(obj) to get an Array of
properties defined on the object itself (the ones that return true for
obj.hasOwnProperty(key)).
*/


/*
Object.keys(myObj).forEach((x) => console.log(x));
Object.keys(myObj).forEach((x, i) => console.log("index " + i + " value: " + x));

*/


/* errata
  this is as mess.. started as proof you can not iterate on properties on an
  object with a for loop and then turned into a way to do do it using
  Object.keys(); (because you can interate on the keys within)

console.log("Object with normal for --[will not work!]----------------------")
var myObj = {firstName: 'Brian', lastName: 'Gormanly'};
console.log(Object.keys(myObj).length);
for(var i=0; i<Object.keys(myObj).length; i++) {
  console.log(myObj[i]);
}
*/
