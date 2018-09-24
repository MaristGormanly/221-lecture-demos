var me = {
	firstName: 'Brian',
	lastName: 'Gormanly',
	car: {
		make: 'chevrolet',
		model: 'ss'
	},
	town: 'Hopewell Junction'
};

console.log('----------- object notation -----------');
console.log(me.firstName);
console.log(me.car.model);

console.log('----------- array notation -----------');
console.log(me['firstName']);
console.log(me['car']['make']);

console.log('----------- for - in -----------');
for (var property in me) {
	console.log(me[property]);
}


function person(firstName,lastName,age,eyeColor) {
	this.firstName=firstName;
	this.lastName=lastName;
	this.age=age;
	this.eyeColor=eyeColor;

	this.changeName= function(name) {
		this.lastName=name;
	}
}

var me2 = new person('brian', 'g', 21, 'blue');
console.log(me2.lastName);
me2.changeName('joe');
console.log(me2.lastName);
