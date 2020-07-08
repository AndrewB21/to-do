import task from './task';

const project = (todoList) => {
    return {todoList}
}

project.prototype = Object.create(task.prototype);