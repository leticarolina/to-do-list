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

const form = document.querySelector("form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.getElementsByTagName("template")[0]; //referring access to the code inside the html element "template"
const STORAGE_KEY_PREFIX = "TODO_LIST"; //recommeded to create a prefix key to save data into the local storage, Its a prefix we add to every key we will save to the local storage
const TODOS_STORAGE_KEY = `${STORAGE_KEY_PREFIX}-todos`;
let todos = loadTodo();

todos.forEach((element) => {
  showTodo(element);
});

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return; //code says if where i clicked is not [data-list-item-checkbox] then nervermind
  const parentOfTodo = e.target.closest(".list-item"); //getting the parennt of clicked checkbox
  const todoId = parentOfTodo.dataset.todoId; //setting the ID
  const todo = todos.find((t) => {
    t.id === todoId;
  });
  todos.complete = e.target.checked;
  saveTodo();
});

//TODO
//add to do - user will type in the input and click add to do button. this should add the Todo to the list
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = input.value;
  if (todoName === "") return; //this will check if input is empty will return function and not run anything under
  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString(), //making each new todo unique by giving a milliseconds number
  };
  todos.push(newTodo);
  showTodo(newTodo);
  saveTodo();
  input.value = "";
});

function showTodo(newTodo) {
  const templateClone = template.content.cloneNode(true); //this will get all the code inside our template
  const listItem = templateClone.querySelector(".list-item");
  listItem.dataset.todoId = newTodo.id; // .dataset.todoId setting a data parameter inside the <li> html with name data-todo-id
  const newTask = templateClone.querySelector("[data-list-item-text]");
  newTask.innerText = newTodo.name;
  //complete
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
  checkbox.checked = newTodo.complete;
  list.appendChild(templateClone);
}

//load todo
function loadTodo() {
  const storageString = localStorage.getItem(TODOS_STORAGE_KEY);
  return JSON.parse(storageString) || []; //JSON.parse takes a string and convert to js object,array etc
}

//save todo
function saveTodo() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos)); //todos is an array annd the value of storage has to be string, so need to stringfy the value
}

//delete to do
list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return;
  const parentOfTodo = e.target.closest(".list-item");
  const todoId = parentOfTodo.dataset.todoId;
  //remove the todo from the screen and the list
  parentOfTodo.remove();
  let newArray = todos.filter((t) => {
    t.id !== todoId;
  });
  saveTodo();
});
