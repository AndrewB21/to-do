//import task from './task';
import project from './projects';
import {projectList, addProject} from './projectManager';
import todo from './todo';
import {renderSidebar, renderProjectContent, renderProjectHeader, currentProject} from './DOMControl';

//Assign DOM elements to variables
const addProjForm = document.querySelector('#add-project-form');
const addTaskForm = document.querySelector('#add-task-form');
const formBackground = document.querySelector('#project-form-background')
const submitProj = document.querySelector('#submit-proj');
const submitTask = document.querySelector('#submit-task');
const addProj = document.querySelector('#add-project');
const closeForm = document.querySelector('.close-form');




//Add required event listeners 
addProj.addEventListener('click', () => {
    formBackground.classList.toggle('hidden');
    addProjForm.classList.toggle('hidden');
});

submitProj.addEventListener('click', function(e){
    e.preventDefault();
    let formProperties = [];
    for (let i = 0; i < addProjForm.length - 1; i++){ //last element in the addProjForm node list is the submit button
                formProperties.push(addProjForm[i].value);
    }
    
    addProject(project(formProperties[0], formProperties[1], formProperties[2], formProperties[3], formProperties[4]))
    renderSidebar();
    addProjForm.reset();
    formBackground.classList.toggle('hidden');
    addProjForm.classList.toggle('hidden');
});

closeForm.addEventListener('click', function(){
    formBackground.classList.toggle('hidden');
    addProjForm.className = 'hidden';
    addTaskForm.className = 'hidden';
})

//handle submit task event
document.addEventListener('click', function(e){
    if(e.target && e.target.id== 'submit-task'){
        e.preventDefault();
        const addTaskForm = document.querySelector('#add-task-form');
        let project = projectList[currentProject]
        let formProperties = [];

        for (let i = 0; i < addTaskForm.length - 1; i++){ //last element in the addTaskForm node list is the submit button
                formProperties.push(addTaskForm[i].value);
        }

        project.addTodo(todo(formProperties[0], formProperties[1], formProperties[2], formProperties[3], formProperties[4], formProperties[5]));
        addTaskForm.reset();
        addTaskForm.classList.toggle('hidden');
        formBackground.classList.toggle('hidden');
        renderProjectHeader(project);
        renderProjectContent(project);

    }
});




