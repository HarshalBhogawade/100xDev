const textvalue = document.getElementById("textInput");
const container = document.getElementById("container");

let cnt = 3;
function addtask(){
    if(textvalue.value==''){
        alert("Input something");
    }

    let task = document.createElement("div");
    let text = textvalue.value;
    task.innerHTML = text+"<button onclick='deleteTask(this)'>Delete task !</button>";
    container.appendChild(task);
}

function deleteTask(btn){
    btn.parentElement.remove();
}


