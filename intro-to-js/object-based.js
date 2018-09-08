// define a person object
function person(first, last, age, gender, interests) {
	this.name = {first, last};
	this.age = age;
	this.gener = gender;
	this.interests = interests;

	this.bio = function() {
		alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.  They like ' + this.interests);
	};

	this.greeting = function() {
		alert('Hi! I\'m ' + this.name.first + '.');
	};
}

// create an instance
var person1 = new person('Henry', 'Smith', 21, 'male', 'Music, Photography, Awesomeness');

// output the persons name (use a member)
person1.greeting();

// output the greeting method that we created
person1.bio();

// try to call something that does not exist yet, a method called farewell
alert("this next call will fail");
person1.farewell();

alert("adding new method, farewell to prototype");

// now add to the prototype of the object the farewell method
person.prototype.farewell = function() {
	alert(this.name.first + ' has left the builing!');
};

// rerun the farewell method you just created on the object that was instantiated before the farewell method existed
person1.farewell();