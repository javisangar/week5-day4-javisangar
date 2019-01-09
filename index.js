function addToDo () {
    const li = document.createElement('li');
    const input = document.getElementById('input');
    const text = document.createTextNode(input.value);
    const ul = document.getElementById('list');
    const btnDelete = addDeleteBtnElement();
    const btnEdit = addEditBtnElement();
    const btnDone = addDoneBtnElement();
    li.appendChild(text);
    li.appendChild(btnDelete);
    li.appendChild(btnEdit);
    li.appendChild(btnDone);
    li.classList.add("task");
    ul.appendChild(li);
}
function addDeleteBtnElement () {
    const btnDelete;
    return btnDelete;
}
function addEditBtnElement () {
    const btnEdit;

    return btnEdit;
}
function addDoneBtnElement () {
    const btnDone;
    return btnDone;
}

function addSaveBtnElement () {
    const btnSave;
    return btnSave;
}
function deleteElement(e) {
    //TODO Borrar el elemento li desde el cual se dispara el evento.
}
function doneElement(e) {
    //TODO Cambiar el color de fondo del elemento li desde el cual se dispara el evento de rojo a verde.
}
function editElement(e) {
    const li = e.target.parentElement;
    const arr = li.childNodes;
    const liText = li.childNodes[0];
    const btnDone = li.childNodes[1];
    const btnEdit = li.childNodes[2];
    const btnDelete = li.childNodes[3];
    const btnSave = addSaveBtnElement();
    const input = document.createElement('input');
    input.setAttribute("id", "inputEdit");
    li.removeChild(liText);
    li.insertBefore(input, btnDone);
    li.removeChild(btnEdit);
    li.insertBefore(btnSave, btnDelete);
}

function saveElement(e) {
    const li = e.target.parentElement;
    const input = li.childNodes[0];
    const inputValue = input.value;
    const btnSave = li.childNodes[2];
    const btnEdit = addEditBtnElement();
    const text = document.createTextNode(inputValue);
    li.insertBefore(text, input);
    li.removeChild(input);
    li.insertBefore(btnEdit, btnSave);
    li.removeChild(btnSave);
}
