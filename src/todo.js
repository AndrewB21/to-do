import task from './task';


const todo = function(title, description, deadline, notes, status, priority){
    prototype = task(title, description, deadline, notes, status);
    const changePriority = function(newPriority){
        this.priority = newPriority;
    }


    return Object.assign({}, prototype, {priority, changePriority});
}




