let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');



addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    var editTodo = document.createElement('button')
    var deleteTodo = document.createElement('button')

    editTodo.innerText = 'Edit';
    deleteTodo.innerText = 'Delete';
    
   
    paragraph.innerText = inputField.value;

    // paragraph.innerHTML += inputField.value + ' ' + editTodo.outerHTML + ' ' + deleteTodo.outerHTML;

    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(editTodo);
    toDoContainer.appendChild(deleteTodo);

    inputField.value = "";

    alert(" Task added successfully ");


    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })

    deleteTodo.addEventListener('click', function () {
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(deleteTodo);
        toDoContainer.removeChild(editTodo);
    })

    editTodo.addEventListener('click', function () {
        
    })

    paragraph.addEventListener('dblclick', function () {

            toDoContainer.removeChild(paragraph)
    })
})

