var para = document.querySelector("p");
var button = document.querySelector("button");
var span = document.querySelector("span");

para.addEventListener("mousedown", function() {
  console.log("Handler for paragraph.");
});

button.addEventListener("mousedown", function(event) {
  console.log("Handler for button.");
});

span.addEventListener("mousedown", function(event) {
  console.log("Handler for span.");
  event.stopPropagation();
});
