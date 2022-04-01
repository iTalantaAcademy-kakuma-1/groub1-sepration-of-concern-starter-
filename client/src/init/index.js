let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let editContainer = document.getElementById('edit');
let deleteContainer = document.getElementById('delete');




addToDoButton.addEventListener('click', function() {

    var listElement = document.createElement('ol');
    var listItem = document.createElement("li");
    var paragraph = document.createElement('p')
    var editBtn = document.createElement('button')
    var deleteBtn = document.createElement('button')

    editBtn.innerText = "edit"
    deleteBtn.innerText = "delete"

   
    // paragraph.innerText = inputField.value;
    // toDoContainer.appendChild(paragraph, editBtn, deleteBtn);
    listItem.innerHTML += inputField.value +"  " + editBtn.outerHTML + "  "+ deleteBtn.outerHTML
    listElement.appendChild(listItem);
    toDoContainer.appendChild(listElement)
    inputField.value = "";
     
})
