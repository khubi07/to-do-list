// lets add variable
const inputBox = document.getElementById("searchBox");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
}