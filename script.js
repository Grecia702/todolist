function criarTarefa() {
    let x = document.getElementById('name').value
    if (x != '') {

        const textbox = document.createElement("div");
        textbox.innerText = x;
        textbox.className = 'textbox'

        let task = document.createElement("div")
        task.className = 'task'
        task.appendChild(textbox)
        let tarefa = document.getElementById('tarefa')
        tarefa.appendChild(task)


        let divImg = document.createElement("div")
        task.appendChild(divImg)
        divImg.classList.add("NewTask")

        const { icon: check } = createIcon(divImg, 'icons/check-mark.png', 'check');
        const { icon: apagar } = createIcon(divImg, 'icons/bin.png', 'delete')
        document.getElementById('name').value = '';
        check.onclick = function () {
            textbox.classList.toggle('taskCompleted')
        }
        apagar.onclick = function () {
            task.remove()
        }
    } else {
        alert("Insira uma tarefa")
    }
}
function createIcon(div, source, type) {
    icon = document.createElement('img')
    icon.src = source
    icon.className = type
    div.appendChild(icon)
    return {
        icon,
        div
    };
}