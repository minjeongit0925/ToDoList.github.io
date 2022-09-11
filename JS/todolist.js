const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input")과 동일
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY="todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("btn-3d");
    button.classList.add("blue");
    button.style.marginLeft = "10px";
    button.addEventListener("click", deleteToDo);
    
    list.appendChild(span); 
    list.appendChild(button);   
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // enter를 쳐도 기본적인 동작이 이뤄지지 않게 해주는 것
    const newToDo = toDoInput.value; // Input 값 다른 변수에 저장

    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}