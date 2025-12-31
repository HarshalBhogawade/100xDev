// create task div and make it draggable
function createTaskElement(title) {
    const task = document.createElement("div");
    task.className = "task";
    
    const content = document.createElement("span");
    content.className = "task-content";
    content.textContent = title;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "✕";
    deleteBtn.onclick = function(e) {
        e.stopPropagation();
        task.remove();
    };

    task.appendChild(content);
    task.appendChild(deleteBtn);

    task.id = "task-" + Date.now();
    task.draggable = true;
    task.ondragstart = drag;
    
    // Add drag visual feedback
    task.ondragend = function() {
        task.classList.remove('dragging');
    };

    return task;
}

// add task to "To Do" column
function addTask() {
    const input = document.getElementById("textInput");

    if (input.value === "") {
        alert("Enter task");
        return;
    }

    const task = createTaskElement(input.value);
    document.getElementById("todo").appendChild(task);

    input.value = "";
}

// drag start → STORE task id
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.classList.add('dragging');
}

// allow dropping
function allowDrop(event) {
    event.preventDefault();
    const column = event.target.closest(".column");
    if (column) {
        column.classList.add('drag-over');
    }
}

// drop → MOVE task
function drop(event) {
    event.preventDefault();

    const taskId = event.dataTransfer.getData("text/plain");
    const task = document.getElementById(taskId);

    event.target.closest(".column").appendChild(task);
}
