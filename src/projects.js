import task from './task';

const project = function(title, description, deadline, notes, status, todoList, id){
    let prototype = task(title, description, deadline, notes, status, id);
    todoList = [];
    const removeTodo = function(item){
        this.todoList = todoList.filter(element => element != item);
    }

    const addTodo = (todo) => {
        todo.id = (todoList.length-1);
        todoList.push(todo);
    }

    return Object.assign({}, prototype, {todoList, removeTodo, addTodo})
}


export default project;