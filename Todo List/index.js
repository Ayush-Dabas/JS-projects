const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if(taskText === "")
        return;

    tasks.push({text: taskText, completed: false});
    taskInput.value = "";
    saveTasks();
    renderTasks();
});

taskList.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        const index = e.target.dataset.index;
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }
    else if(e.target.classList.contains("delete")){
        const index = e.target.dataset.index;
        tasks.splice(index,1);
        saveTasks();
        renderTasks();
    }
});

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        li.dataset.index = i;
        if(task.completed){
            li.classList.add("completed");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.dataset.index = i;

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}