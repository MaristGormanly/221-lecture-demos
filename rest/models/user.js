function user(first, last, email, password) {
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.password = password;
}

exports.createUser = function(first, last, email, password) {
  return new user(first, last, email, password);
};
