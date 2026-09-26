

// const todoForm = document.querySelector("#todo-form")
// const todoInput = document.querySelector("#todo-input")
// const todoList = document.querySelector("#todo-list")

// let todos = ['Go to gym', 'Revision web dev', 'Take class']

// todoForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const todoValue = todoInput.value;
//     todos.push(todoValue)
//     renderTodo() // jab koi naya todo add hoga 1st updatee todos hoga

//      /*const li = document.createElement("li")
//         li.textContent = todoValue;
//         todoList.append(li)*/
// })
// function renderTodo() {
//     // todoList.textContent="";
//     todoList.innerHTML="";
//     todos.forEach(function (todo) {
//         const li = document.createElement("li")
//         li.textContent = todo;//<li>actull todo</li>
//         todoList.append(li)
//     })
// }
// renderTodo(); // jab 1st time file execute hogitab exiting todos render hoge






const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")

let todos = [{
    id: Date.now() + 1,
    text: "Go to gym",
    isCompleted: false
}, {
    id: Date.now() + 2,
    text: "Revision web dev",
    isCompleted: false
}, {
    id: Date.now() + 3,
    text: "Take class",
    isCompleted: false
}];

let editTodoId = null;
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoValue = todoInput.value;
    // todos.push(todoValue)
    console.log(editTodoId, todoValue);

    if (editTodoId) {
        //editing
        todos = todos.map((todo) =>{
            if(todo.id !== Number(editTodoId)){
                return{
                    ...todo,
                    text: todoValue
                }
            }
            return todo;

        })
    }
    else {
        // adding
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }
        todos.push(newTodo)
    }
    // addTodo(newTodo);
    
    renderTodo()
})
function renderTodo() {
    todoList.innerHTML ="";
    todos.forEach(function (todo) {
        addTodo(todo)
    })
}
renderTodo(); // jab 1st time file execute hogitab exiting todos render hoge

function addTodo(todo) {
    const li = document.createElement("li") // <li></li>
    // <li data-id="1" class="flex gap-2 border border-slate-300 p-4 rounded-xl">
    li.dataset.id = todo.id;
    li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
    li.innerHTML = `
                <input data-id=${todo.id} ${todo.isCompleted === true ? 'checked' : ""}  type="checkbox">
                <p class="flex-1">${todo.text}</p>
                <div class="flex gap-2">
                    <button data-action="edit" data-id=${todo.id}>Edit</button>
                    <button data-action="delete" data-id=${todo.id}>Delete</button>
                </div>
            </li>`;
    todoList.append(li) // ul -> li
}

// event delegation

todoList.addEventListener('click', (e) => {
    e.stopPropagation;
    const li = e.target.closest('li');
    let btn = e.target.closest("button")
    let action = btn?.dataset.action;
    const id = li?.dataset?.id
    let checkbox = e.target.closest('input[type="checkbox"]')
    if (action === 'edit') {
        startEdit(id)
        // console.log("editing...");
    }
    if (action === "delete") {
        // console.log("deleting...");
        deleteTodo(id)
    }
    if (checkbox) {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo;
        })
        renderTodo()
    }

})

function deleteTodo(e, id) {
    e.target.closest('li').remove();
    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo;
        }
        return todo;
    })
}

function startEdit(id) {
    editTodoId = id;

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })
    todoInput.value = currentTodo.text
    formBtn.textContent = "Update"
}

