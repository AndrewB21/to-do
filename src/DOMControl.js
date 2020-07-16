import {projectList} from './projectManager'

const projectsSidebar = document.querySelector('.projects-sidebar');
const projectsWrapper = document.querySelector('.projects-wrapper');
let currentProject = null;
let renderStatus = false;

const renderSidebar = () => {
    projectsSidebar.innerHTML="";
    projectList.forEach((project, index) => {
        let div = document.createElement('div');
        div.id = `project${index}`;
        div.addEventListener('click', function(e){
            renderProjectHeader(projectList[project.id]);
            renderProjectContent(projectList[project.id]);
            currentProject = project.id;
        })
        div.appendChild(document.createTextNode(project['title']));
        projectsSidebar.appendChild(div);
    })
}

const renderProjectHeader = (project) => {    
    projectsWrapper.innerHTML = '';
    
    const projectHeaderHTML = `
        <div id='project-header'>
            <h2>${project.title}</h2>
            <h3>${project.description}</h3>
            <button id='add-task'>Add Task</button>
        </div>
    `
    projectsWrapper.innerHTML = projectsWrapper.innerHTML + projectHeaderHTML;
    if (renderStatus === false){
        document.addEventListener('click',function(e){
            if(e.target && e.target.id == 'add-task'){
                document.querySelector('#add-task-form').classList.toggle('hidden');
                document.querySelector('#project-form-background').classList.toggle('hidden');
            }
        });
        renderStatus = true;
    }
}

const renderProjectContent = (project) => {  
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
    
    `
    
    const projectContent = `
        <div id='proj${project.id}' class='project-content'>
           
            <div class='task-box new-tasks'>
                <h5>New Tasks</h5>
            </div> 
            <div class='task-box current-tasks'>
                <h5>Current Tasks</h5>
            </div>
            <div class='task-box finished-tasks'>
                <h5>Completed Tasks</h5>
            </div>
            ${taskForm}      
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


export {renderSidebar, renderProjectHeader, renderProjectContent, currentProject};