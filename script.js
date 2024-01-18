// //1. Select all elements
// const list = document.querySelector("#list");
// const form = document.querySelector("#new-item-form");
// const input = document.querySelector("#item-input");
// //2. When click submit the form, add a new element with event listener, also prevent the default
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //2.1 create a new item/element div on the html after click submit and change it's inner text, also add css class list-item
//   const newItem = document.createElement("div");
//   newItem.innerText = input.value;
//   newItem.classList.add("list-item");
//   //2.2 add the item/element to the list element on html using append child
//   list.appendChild(newItem);
//   //2.3 clear the input after clicking to add the value
//   input.value = "";
//   //2.4 Setup event listener to delete item when click on it 2 ways
//   newItem.addEventListener("click", () => {
//     newItem.remove();
//   });
// });

// const form = document.querySelector("form");
// const input = document.querySelector("#todo-input");
// const list = document.querySelector("#list");
// const template = document.getElementsByTagName("template")[0]; //referring access to the code inside the html element "template"
// const STORAGE_KEY_PREFIX = "TODO_LIST"; //recommeded to create a prefix key to save data into the local storage, Its a prefix we add to every key we will save to the local storage
// const TODOS_STORAGE_KEY = `${STORAGE_KEY_PREFIX}-todos`;
// let todos = loadTodo();

// todos.forEach((element) => {
//   showTodo(element);
// });

// //marking as done
// list.addEventListener("change", (e) => {
//   if (!e.target.matches("[data-list-item-checkbox]")) return; //code says if where i clicked is not [data-list-item-checkbox] then nervermind
//   const parentOfTodo = e.target.closest(".list-item"); //getting the parennt of clicked checkbox
//   const todoId = parentOfTodo.dataset.todoId; //setting the ID
//   console.log(todoId);
//   let todo = todos.find((t) => {
//     t.id === todoId;
//   });
//   todo.complete = e.target.checked;
//   saveTodo();
// });

// //delete to do
// list.addEventListener("click", (e) => {
//   if (!e.target.matches("[data-button-delete]")) return;
//   const parentOfTodo = e.target.closest(".list-item");
//   const todoId = parentOfTodo.dataset.todoId; //getting the id of the deleted todo(?)
//   //remove the todo from the screen and the list
//   parentOfTodo.remove();
//   let newArray = todos.filter((t) => {
//     t.id !== todoId;
//   }); //filter the todo ID'S that are NOT equal to the one that was delete
//   saveTodo();
// });

// //TODO
// //1. add to do - user will type in the input and click add to do button. this should add the Todo to the list
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const todoName = input.value;
//   if (todoName === "") return; //this will check if input is empty will return function and not run anything under
//   const newTodo = {
//     name: todoName,
//     complete: false,
//     id: new Date().valueOf().toString(), //making each new todo unique by giving a milliseconds number
//   };
//   todos.push(newTodo);
//   showTodo(newTodo);
//   saveTodo();
//   input.value = "";
// });

// function showTodo(newTodo) {
//   const templateClone = template.content.cloneNode(true); //this will get all the code inside the html <template>
//   const listItem = templateClone.querySelector(".list-item"); //selecting list-item from <template> element
//   listItem.dataset.todoId = newTodo.id; // .dataset.todoId setting a data parameter inside the <li> html with name data-todo-id the value will refer to the new Date()
//   const textElement = templateClone.querySelector("[data-list-item-text]");
//   textElement.innerText = newTodo.name;
//   //checkmark a todo
//   const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
//   // if (checkbox.checked) {
//   //   newTodo.complete = true;
//   // } else {
//   //   newTodo.complete = false;
//   // };
//   checkbox.checked = newTodo.complete;
//   list.appendChild(templateClone);
// }

// //load todo
// function loadTodo() {
//   const storageString = localStorage.getItem(TODOS_STORAGE_KEY);
//   return JSON.parse(storageString) || []; //JSON.parse takes a string and convert to js object,array etc or [] means if no storage return an empty array
// }

// //save todo
// function saveTodo() {
//   localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos)); //todos is an array and the value of storage has to be string, so need to stringfy the value
// }
//-----------------------------------------------------------------------------

//second code todo
//add, mark complete , delete , save todo, render on the page saved
const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.getElementsByTagName("template")[0];
console.log(template);
const STORAGE_KEY_PREFIX = "TODO_LIST";
const TODOS_STORAGE_KEY = `${STORAGE_KEY_PREFIX}-todos`;
let todos = showSavedTodo();
// quote
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");

function newQuote() {
  //code to pick a random quote from api localQuotes
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  authorText.textContent = quote.author; //textContent is to pass in a string what is shown on the element
  if (quote.text.length > 140) {
    quoteText.classList.add("long-quote");
    //classList is to target a CSS declaration block
    //.add is to add the declaration and .remove to remove
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text; //quote.text is to target the class in the html code
}
newQuote();

twitterButton.addEventListener("click", () => {
  const TweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(TweetUrl, "_blank");
});

todos.forEach((e) => {
  renderTodo(e);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = input.value;
  if (newTodoText === "") return;

  const newTodo = {
    name: newTodoText,
    complete: false,
    id: crypto.randomUUID(), //making each new todo unique by giving a milliseconds number
  };
  todos.push(newTodo);
  renderTodo(newTodo);
  saveTodo();
  input.value = "";
});

//show or add the todos
function renderTodo(newTodo) {
  const templateClone = template.content.cloneNode(true);
  console.log(templateClone);
  const listItem = templateClone.querySelector(".list-item-js");
  const textElement = templateClone.querySelector("[data-list-item-text]");
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
  textElement.innerText = newTodo.name;
  checkbox.addEventListener("change", () => {
    newTodo.complete = !newTodo.complete;
    saveTodo();
  });
  if (newTodo.complete) {
    checkbox.checked = true;
  }
  list.appendChild(templateClone);
}

//delete
list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return;
  const parent = e.target.closest(".list-item-js");
  // Get the existing data from localStorage
  const existingTodos = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY));
  //getting todo innertext so I can reference it to remove from localStorage
  const todoText = parent.querySelector(".data-text").innerText;
  //making the new todo list remove the object that matches todoText
  todos = existingTodos.filter((todo) => todo.name != todoText);
  parent.remove();
  // Save the modified data back to localStorage
  saveTodo();
});

//show saved todos
function showSavedTodo() {
  const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
  return JSON.parse(savedTodos) || [];
}

//save
function saveTodo() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}
