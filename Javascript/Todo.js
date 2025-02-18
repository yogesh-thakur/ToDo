const inputFiled = document.querySelector(".input-Additems");
const AddBtn = document.querySelector(".Add-btn");
const todoListContainer = document.querySelector(".todo-list-container .todo-list-value");
const todoData = [];

AddBtn.addEventListener("click", function () {
  if (inputFiled.value.trim() !== "") {
    const todoValue = {
      id: new Date(),
      value: inputFiled.value, 
    };
    todoData.push(todoValue);
    inputFiled.value = "";
    createList(todoValue);
  }
});

function createList(todoValue) {
  const createDiv = document.createElement("div");
  createDiv.setAttribute("class", "appendData"); 

  createDiv.innerHTML = `
    <span class="todo-value">${todoValue.value}</span>
    <span>
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    </span>
  `;

  todoListContainer.appendChild(createDiv);
  const deleteBtn = createDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    createDiv.remove()
  });

  const editBtn = createDiv.querySelector(".edit-btn");
  editBtn.addEventListener("click", function () {
    inputFiled.value = todoValue.value; 
    const index = todoData.findIndex(item => item.id === todoValue.id);
    if (index !== -1) {
      todoData.splice(index, 1);
    }
    createDiv.remove();
  });
  }; 