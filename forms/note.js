
// get the select dropdown the values inside will be populated by addToList()
var list = document.getElementById("list");

// get the current note editor
var current = document.getElementById("currentnote");

// set the content of the editory to the note currently selected
current.value = notes[list.value];

//add a note to the list of notes
function addToList(name) {
	var option = document.createElement("option");
	option.textContent = name;
	list.appendChild(option);
}

// Initialize the list from localStorage
var notes = JSON.parse(localStorage.getItem("notes")) 
	|| {"shopping list": ""};

// iterate through each note and add it to the dropdown list
for (var name in notes) {
	if (notes.hasOwnProperty(name))
		addToList(name);
}

// function called to save a note to localStorage (event listeners activate)
function saveToStorage() {
	localStorage.setItem("notes", JSON.stringify(notes));
}

// event listener for change on our list (chose existing note)
list.addEventListener("change", function() {
	current.value = notes[list.value];
});

// event listener for change no our editory (note need to be saved)
current.addEventListener("change", function() {
	notes[list.value] = current.value;
	saveToStorage();
});

// get the add note button
var addNote = document.getElementById("newNote");

// add an event on the add note button to create a new note
// add it to the dropdown list and save it.
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
