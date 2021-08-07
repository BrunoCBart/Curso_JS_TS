const taskList = document.querySelector(".task-list");
const taskInput = document.querySelector(".task");

document.addEventListener('click', function(e) {
  const task = taskInput.value
  const el = e.target

  if(el.classList.contains('addTask')) {
    makeTask(task)
  }
})

taskInput.addEventListener('keypress', function(e) {
  const task = taskInput.value
  if(e.keyCode === 13) {
    if(!taskInput) return
    makeTask(task)
  }
})
function makeTask(task) {
  if(!task) return
  clearInput()
  const li = createLi()
  li.innerText = task
  createDelButton(li)
  taskList.appendChild(li)
  saveTasks()
}

document.addEventListener('click', function(e) {
  const el = e.target
  if(el.classList.contains('delete')) {
    el.parentElement.remove()
    saveTasks()
  }
}) 

function createLi () {
  const li = document.createElement('li')
  return li
}

function clearInput() {
  taskInput.value = ''
  taskInput.focus()
}

function createDelButton(li) {
  const del = document.createElement('button')
  del.classList.add('delete')
  del.innerText = 'Delete'
  li.appendChild(del)
}

function saveTasks() {
  const liTask = taskList.querySelectorAll('li')
  const saveTaskList = []

  for(let task of liTask) {
    const splitText = task.innerText.replace('Delete', '')
    saveTaskList.push(splitText)
  }
 
  const tasksJson = JSON.stringify(saveTaskList)
  localStorage.setItem('tasks', tasksJson)
}

function addSaveTasks() {
  const tasks = localStorage.getItem('tasks')
  const tasksList = JSON.parse(tasks)
  for(let task of tasksList) {
    makeTask(task)
  }
}

addSaveTasks()