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
}