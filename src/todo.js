import task from './task';


const todo = function(title, description, deadline, notes, status, priority, id){
    let prototype = task(title, description, deadline, notes, status, id);
    const changePriority = function(newPriority){
        this.priority = newPriority;
    }


    return Object.assign({}, prototype, {priority, changePriority});
}

export default todo;


