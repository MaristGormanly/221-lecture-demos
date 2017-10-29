
var list = document.getElementById("list");
function addToList(name) {
	var option = document.createElement("option");
	option.textContent = name;
	list.appendChild(option);
}

// Initialize the list from localStorage
var notes = JSON.parse(localStorage.getItem("notes")) 
	|| {"shopping list": ""};

for (var name in notes) {
	if (notes.hasOwnProperty(name))
		addToList(name);
}
	
function saveToStorage() {
	localStorage.setItem("notes", JSON.stringify(notes));
}

var current = document.getElementById("currentnote");
current.value = notes[list.value];

list.addEventListener("change", function() {
	current.value = notes[list.value];
});
current.addEventListener("change", function() {
	notes[list.value] = current.value;
	saveToStorage();
});

var addNote = document.getElementById("newNote");



addNote.addEventListener("click", function() {
	var name = prompt("Note name", "");
	if (!name) return;
	
	if (!notes.hasOwnProperty(name)) {
   		notes[name] = "";
		addToList(name);
		saveToStorage();
	}
	list.value = name;
	current.value = notes[name];
});
