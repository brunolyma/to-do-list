// Fazer uma funcionalidade de contentEditable
// Fazer uma funcionalidade de Drag n Drop ... FEITO
// Fazer com que as tarefas sejam salvas

function addTask(e) {
  const ul = e.previousElementSibling
  const task = cardCreator()

  ul.innerHTML += task
  localStorage.setItem(task.id, task)
  console.log(task)
}

function cardCreator() {
  const text = prompt("Digite a tarefa")
  let task

  if (text != "") {
    task = `
              <li id="${Date.now()}" ondragstart="drag(event)" draggable="true">
                <p>${text}</>
                <p class="remove" onclick="remove(this)">🗑️</p>
              </li>
            `
  }

  return task
}

function remove(event) {
  const taskToDelete = event.parentElement
  const elementoPai = taskToDelete.parentElement

  console.log(taskToDelete.id)

  elementoPai.removeChild(taskToDelete)
  localStorage.removeItem(taskToDelete.id)
}

function drag(event) {
  event.dataTransfer.setData("card", event.target.id)
}

function drop(event, id) {
  event.preventDefault()
  const target = document.getElementById(id)
  const data = event.dataTransfer.getData("card")
  const card = document.getElementById(data)
  target.appendChild(card)
  event.dataTransfer.clearData()
}

function over(event) {
  event.preventDefault()
}
