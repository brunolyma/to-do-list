function addTask(e) {
  const divPai = e.parentElement
  const ul = divPai.children[1].children[0]
  const task = cardCreator()

  ul.appendChild(task)
}

function cardCreator() {
  const text = prompt("Digite a tarefa")
  let task

  if (text) {
    task = document.createElement("li")
    task.setAttribute('draggable', 'true')
    task.innerHTML = `
                <p>${text}</>
                <p class="remove" onclick="remove(this)">🗑️</p>
            `
  }

  return task
}

function remove(event) {
  const taskToDelete = event.parentElement
  const elementoPai = taskToDelete.parentElement

  elementoPai.removeChild(taskToDelete)
}
