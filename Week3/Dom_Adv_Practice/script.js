function addtask(){
    let value = document.querySelector("input").value;
    const divel = document.createElement("div");

    //its best practices to create multiple objects inside dom and then append instead of just creating objects inside objects by using,
    //string concatenation 

    const spanel = document.createElement("span");
    const delbtnel = document.createElement("button");
    spanel.innerHTML = value;
    delbtnel.innerHTML = "Delete Task";

    divel.appendChild(spanel);
    divel.appendChild(delbtnel);
    document.querySelector("body").appendChild(divel);
}