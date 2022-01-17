var buttonEl = document.querySelector("#save-task");

buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});


var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl =document.querySelector("task-form");
var createTaskHandler = function(event) { 
  event.preventDefault(); 
  var taskNameInput = document.querySelector("input[name='task-name']");
console.log(taskNameInput);

  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

