import {projectList} from './projectManager'

const projectsSidebar = document.querySelector('.projects-sidebar');
const projectsWrapper = document.querySelector('.projects-wrapper');


const renderSidebar = () => {
    console.log(projectList);
    projectsSidebar.innerHTML="";
    projectList.forEach((project, index) => {
        let div = document.createElement('div');
        div.id = `project${index}`;
        div.addEventListener('click', function(e){
            renderProjectHeader(projectList[e.target.id[7]]);
            renderProjectContent(projectList[e.target.id[7]]);
        })
        div.appendChild(document.createTextNode(project['title']));
        projectsSidebar.appendChild(div);
    })
}

const renderProjectHeader = (project) => {    
    projectsWrapper.innerHTML = '';
    
    const projectHeader = `
        <div id='project-header'>
            <h2>${project.title}</h2>
            <h3>${project.description}</h3>
            <button id='add-task'>Add Task</button>
        </div>
    `
    projectsWrapper.innerHTML = projectsWrapper.innerHTML + projectHeader;
    projectsWrapper.addEventListener('click',function(e){
        if(e.target && e.target.id== 'add-task'){
              document.querySelector('#add-task-form').className = "";
         }
     });
}

const renderProjectContent = (project) => {
    //let completedTasks = [];
    //let newTasks = [];
    //let currentTasks = [];
    
    const appendTask = (task) => {
            let div = document.createElement('div');
            div.innerHTML = `
                <p>${task.title}</p>
                <p>${task.priority}</p>
                <p>${task.deadline}</p>
            `
            div.addEventListener('click', function(e){
                console.log('task click');
            })

            return div;
    }


    const taskForm = `
    <form id="add-task-form" class="hidden">
                    <label for="task-title">Title</label>
                        <input type="text" name="task-title">
                    <label for="task-description">Description</label>
                        <input type="text" name="task-description">
                    <label for="task-deadline">Deadline</label>
                        <input type="date" name="task-deadline">
                    <label for="task-notes">Notes</label>
                        <textarea name="notes" form="add-task-form" id="task-notes"></textarea>
                    <label for="task-status">Status</label>
                    <select name="task-status" id="task-status">
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Finished">Finished</option>
                    </select>
                    <label for="task-priority">Priority</label>
                    <select name="task-priority" id="task-priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    <button type='submit' id='submit-task'>Submit Task</button>       
                </form>  
    `
    
    const projectContent = `
        <div id='proj${project.id}' class='project-content'>
            ${taskForm}
            <div class='task-box new-tasks'>
                <h5>New Tasks</h5>
            </div> 
            <div class='task-box current-tasks'>
                <h5>Current Tasks</h5>
            </div>
            <div class='task-box finished-tasks'>
                <h5>Completed Tasks</h5>
            </div>      
        </div>
    `
    projectsWrapper.innerHTML = projectsWrapper.innerHTML + projectContent;

    const newTasks = document.querySelector('.new-tasks');
    const currentTasks = document.querySelector('.current-tasks');
    const finishedTasks = document.querySelector('.finished-tasks');

    project.todoList.forEach(todo => {
        switch (todo.status){
            case 'Not Started':
                newTasks.appendChild(appendTask(todo));
                break;
            case 'In Progress':
                currentTasks.appendChild(appendTask(todo));
                break;
            case 'Finished':
                finishedTasks.appendChild(appendTask(todo));
                break;
        }
    })
}


export {renderSidebar, renderProjectHeader, renderProjectContent};