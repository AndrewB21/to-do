import task from './task';

const todo = (title, description, deadline, notes, status, priority) => {
    const prototype = task(title, description, deadline, notes, status);
    return Object.assign({}, prototype, priority);
}




