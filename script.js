const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
    document.getElementById("clearButton").style.display = "inline-block";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    const clearButton = document.getElementById("clearButton");
    clearButton.style.display = listContainer.children.length > 0 ? "inline-block" : "none";
}
showTask();


function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

function resetTasks() {
    listContainer.innerHTML = ''; // Clear all tasks
    saveData(); // Save the updated data to local storage
    document.getElementById("clearButton").style.display = "none";
}