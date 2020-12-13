//query selector
const addBtn = document.querySelector(".btn")
const todoList = document.querySelector('.todo-list')
const newTodo = document.querySelector('input')
addBtn.addEventListener('click', addNewtodo)
todoList.addEventListener('click', checkDelete)

//Functions 
function addNewtodo(e){
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    const todoLi = document.createElement('li')
    todoLi.classList.add("list")
    todoLi.innerText = newTodo.value
    const todoDelete = document.createElement('button')
    todoDelete.classList.add("delete-btn")
    todoDelete.innerHTML = '<i class="fas fa-trash"></i>'
    const todoCheck = document.createElement('button')
    todoCheck.classList.add("check-btn")
    todoCheck.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(todoLi)
    todoDiv.appendChild(todoCheck)
    todoDiv.appendChild(todoDelete)
    todoList.appendChild(todoDiv)
    newTodo.value = "";
}
function checkDelete(e){
    const item = e.target
    if(item.classList.contains('delete-btn')){
        item.parentElement.classList.add("delete")
        item.parentElement.addEventListener('transitionend', () => {
            item.parentElement.remove()
        })
    }
    if(item.classList.contains('check-btn')){
        item.parentElement.classList.toggle('completed')
    }
}