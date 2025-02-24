// lets add variable
const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function AddTask(event){
    //prevent the default form submission behaviour
    if(event){
        event.preventDefault();
    }

    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        //new list to set its inner HTML the value of inputBox
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        //append new list item to list container
        listContainer.appendChild(li);

        //create span ele, set its innerHTML to "x" and append to list itme
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    //clear value of input box
    inputBox.value = "";
    saveData();
}
//make sure id in html and js matches to work properly

//js for click function
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//function to save data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//to display data again
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();