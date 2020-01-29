var todoButton = document.getElementById('enter');
var todoInput = document.getElementById('userInput');
var ul = document.querySelector('ul');
var todos = document.getElementsByTagName('li');
var nameButton = document.getElementById('enterName');
var nameInput = document.getElementById('nameInput');
var div = document.getElementById('name');


const nameInputLength = () => {
    return nameInput.value.length;
}


const createName = () => {
    var span = document.createElement('span');

    span.appendChild(document.createTextNode(nameInput.value));
    div.appendChild(span);
    nameInput.value = '';

    var bringS = document.getElementById('s');
    bringS.style.display = 'inline-block';

    var wholeDiv = document.getElementById('input');
    wholeDiv.remove();

}

function addNameAfterClick() {
    if (nameInputLength() > 0) {
        createName();
    }
}

function addNameAfterKeypress(event) {
    if (nameInputLength() > 0 && event.which === 13) {
        createName();
    }
}


nameButton.addEventListener('click', addNameAfterClick);
nameInput.addEventListener('keypress', addNameAfterKeypress);

function inputLength() {
    return todoInput.value.length;
}

function listLength() {
    return todos.length;
}

function createList() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    ul.appendChild(li);
    todoInput.value = '';


    function crossOut() {
        li.classList.toggle('done');
    }
    li.addEventListener("click", crossOut);

    var delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    delBtn.addEventListener('click', deleteListItem);

    function deleteListItem() {
        li.classList.add('delete')
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createList();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createList();
    }
}

todoButton.addEventListener('click', addListAfterClick);
todoInput.addEventListener('keypress', addListAfterKeypress);