var todos = [
  {
    id: 1,
    title: 'a todo 1',
    status: false
  },
  {
    id: 2,
    title: 'c todo 3',
    status: false
  },
  {
    id: 3,
    title: 'b todo 2',
    status: false
  }
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
    var obj = {};
    var arrId = todos.map(todo => todo.id);
    obj.id = arrId.length ? Math.max(...arrId) + 1 : 1;
    obj.title = inputTodo.value;
    obj.status = false;
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