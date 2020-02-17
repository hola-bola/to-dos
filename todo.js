let todoButton = document.getElementById('enter');
let todoInput = document.getElementById('userInput');
let ul = document.querySelector('ul');
let todos = document.getElementsByTagName('li');
let nameButton = document.getElementById('enterName');
let nameInput = document.getElementById('nameInput');
let div = document.getElementById('name');


const nameInputLength = () => nameInput.value.length;



const createName = () => {
    const span = document.createElement('span');

    span.appendChild(document.createTextNode(nameInput.value));
    div.appendChild(span);
    nameInput.value = '';

    const bringS = document.getElementById('s');
    bringS.style.display = 'inline-block';

    const wholeDiv = document.getElementById('input');
    wholeDiv.remove();

}

const addNameAfterClick = () => {
    if (nameInputLength() > 0) createName();
}

const addNameAfterKeypress = (event) => {
    if (nameInputLength() > 0 && event.which === 13) createName();

}


nameButton.addEventListener('click', addNameAfterClick);
nameInput.addEventListener('keypress', addNameAfterKeypress);

const inputLength = () => todoInput.value.length;


const listLength = () => todos.length;

const createList = () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    ul.appendChild(li);
    todoInput.value = '';


    const crossOut = () => li.classList.toggle('done');

    li.addEventListener("click", crossOut);

    let delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    delBtn.addEventListener('click', deleteListItem);

    function deleteListItem() {
        li.classList.add('delete')
    }

}


const addListAfterClick = () => {
    if (inputLength() > 0) {
        createList();
    }
}

const addListAfterKeypress = (event) => {
    if (inputLength() > 0 && event.which === 13) {
        createList();
    }
}

todoButton.addEventListener('click', addListAfterClick);
todoInput.addEventListener('keypress', addListAfterKeypress);