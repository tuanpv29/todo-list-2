var todos = [
  {
    id: 1,
    title: 'todo 1',
    status: false
  },
  {
    id: 2,
    title: 'todo 2',
    status: false
  },
  {
    id: 3,
    title: 'todo 3',
    status: false
  }
];

var inputTodo = document.querySelector("#inputTodo");
var listTodo = document.querySelector("#listTodo");

function renderTodos() {
  listTodo.innerHTML = "";
  todos.forEach(item => {
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", () => checkTodo(item, checkbox))
    var todo = document.createElement("li");
    var textTodo = document.createTextNode(item.title);
    todo.appendChild(checkbox)
    todo.appendChild(textTodo);
    listTodo.appendChild(todo);
    createDeleteTodo(item.id);
  });
}

function addTodo() {
  if (inputTodo.value !== "") {
    var obj = {};
    var arrID = todos.map(todo => todo.id);
    if (arrID.length !== 0) {
      // Find id with the highest value in array
      obj.id = Math.max(...arrID) + 1;
      obj.title = inputTodo.value;
      obj.status = false;
      todos.push(obj);
    } else {
      obj.id = 1;
      obj.title = inputTodo.value;
      obj.status = false;
      todos.push(obj);
    }
    renderTodos();
  }
  inputTodo.value = "";
  inputTodo.focus();
}

function createDeleteTodo(todo) {
  var closeBtn = document.createElement("button");
  var textCloseBtn = document.createTextNode("\u00D7");
  closeBtn.appendChild(textCloseBtn);
  closeBtn.addEventListener("click", () => removeTodo(todo));
  listTodo.appendChild(closeBtn);
}

function removeTodo(id) {
  todos = todos.filter(todo => id !== todo.id);
  renderTodos();
}

function checkTodo(todo, event) {
  if (event.checked === true) {
    console.log("done");
  } else {
    console.log("doing")
  }
  // renderTodos();
}
// init
renderTodos();