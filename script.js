const localStoragekey = "todo-list"

function criarTarefa() {
    let newTask = document.getElementById('name').value
    if (newTask == '') {
        alert("Insira uma tarefa")
        return;
    }
    const textbox = document.createElement("div");
    textbox.innerText = newTask;
    textbox.className = 'textbox'

    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    values.push({
        id: values.length,
        value: newTask,
        checked: false
    })
    localStorage.setItem(localStoragekey, JSON.stringify(values))
    loadTasks();
}

function loadTasks() {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]')
    let list = document.getElementById('tarefa')
    let imgSrc = "icons/trash.svg"
    list.innerHTML = ''

    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `
        <div class="${values[i]['checked'] ? "task taskCompleted" : "task"}" id="task${i}">
            <input type="checkbox" class="check-box" id="complete${i}" ${values[i]['checked'] ? 'checked' : ''}>
            <div class="textbox">${values[i]['value']}</div>
            <label for="complete${i}" class="check-label"></label>
            <div class="DeleteTask">
            <img src="${imgSrc}" class="delete" id="delete${i}" />
            </div>
        </div>
        `
    }

    for (let i = 0; i < values.length; i++) {
        const base = document.querySelector('.pesquisar');
        const alvo = document.getElementById(`task${i}`);
        const larguraBase = base.offsetWidth;
        const deleteTask = document.getElementById(`delete${i}`)
        const completeTask = document.getElementById(`complete${i}`)
        alvo.style.maxWidth = `${larguraBase}px`;

        deleteTask.addEventListener("click", () => {
            alvo.remove()
            let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
            let idRemove = i
            values = values.filter(task => task.id !== idRemove)
            localStorage.setItem(localStoragekey, JSON.stringify(values));
        });

        completeTask.addEventListener("click", () => {
            let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
            checar = values.find(task => task.id === i)
            checar.checked = !checar.checked
            alvo.classList.toggle('taskCompleted', alvo.checked)
            localStorage.setItem(localStoragekey, JSON.stringify(values));
        });
    }
}

loadTasks();