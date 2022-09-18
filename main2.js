window.addEventListener('load', () => {
    const form = document.querySelector('#createTaskForm');
    const input = document.querySelector('#createTaskForm');
    const listelement = document.querySelector('#tasks')

    form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input;

    if (!task){
        alert("please add task");
        return;
    }
    const taskelement = document.createElement("div");
    taskelement.classList.add("task");

    const taskcontentelement = document.createElement("div");
    taskcontentelement.classList.add("content");
    taskcontentelement.innerText = task;

    taskelement.appendChild(taskcontentelement);

    listelement.appendChild(taskelement);



    })
})
