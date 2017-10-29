var json = {
  "emp":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
}

for(var i=0; i< json.emp.length; i++) {
	console.log(json.emp[i].firstName + " " + json.emp[i].lastName);
}