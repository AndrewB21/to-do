import task from './task';

const project = function(title, description, deadline, notes, status, todoList){
    prototype = task(title, description, deadline, notes, status);
    
    const removeTodo = function(item){
        this.todoList = todoList.filter(element => element != item);
    }

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    return Object.assign({}, prototype, {todoList, removeTodo, addTodo})
}

const projectManager = function(projectList){
    
    const addProject = function(project){
        projectList.push(project);
    }


    
    return{projectList, addProject}
}