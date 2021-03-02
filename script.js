class Todo {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}

var todos = [
  new Todo(1, "todo 1", false),
  new Todo(2, "todo 2", false),
  new Todo(3, "todo 3", false)
];

var inputTodo = document.querySelector("#inputTodo");
var listTodo = document.querySelector("#listTodo");

function renderTodos() {
  listTodo.innerHTML = "";
  todos.forEach(item => {
    var todo = document.createElement("li");
    listTodo.appendChild(todo);
    createCheckTodo(item, todo);
    createTitleTodo(item, todo);
    createDeleteTodo(item, todo);
  });
}

function createTitleTodo(obj, li) {
  var text = document.createTextNode(obj.title);
  li.appendChild(text);
}

function createCheckTodo(obj, li) {
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", () => completeTodo(obj, checkbox))
  if (obj.status == true) {
    checkbox.checked = true;
    li.classList.add("check");
  }
  checkbox.classList.add("doneBox")
  li.appendChild(checkbox)
}

function createDeleteTodo(obj, li) {
  var button = document.createElement("button");
  var text = document.createTextNode("\u00D7");
  button.addEventListener("click", () => removeTodo(obj.id));
  button.classList.add("deleteBtn")
  button.appendChild(text);
  li.appendChild(button);
}

function addTodo() {
  if (inputTodo.value.trim() !== "") {
    var arrId = todos.map(todo => todo.id);
    var id = arrId.length ? Math.max(...arrId) + 1 : 1;
    var title = inputTodo.value
    var obj = new Todo(id, title, false)
    todos.push(obj);
    renderTodos();
  }
  inputTodo.value = "";
  inputTodo.focus();
}

function removeTodo(id) {
  todos = todos.filter(obj => id !== obj.id);
  renderTodos();
}

function completeTodo(obj, done) {
  obj.status = done.checked;
  renderTodos();
}

function sortTodo() {
  todos.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  })
  renderTodos();
}

renderTodos();