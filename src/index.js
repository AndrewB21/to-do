//import task from './task';
import project from './projects';
import {projectList, addProject} from './projectManager';
import todo from './todo';
import {renderSidebar} from './DOMControl';

//Assign DOM elements to variables
const addProjForm = document.querySelector('#add-project-form');
const addTaskForm = document.querySelector('#add-task-form');
const submitProj = document.querySelector('#submit-proj');
const submitTask = document.querySelector('#submit-task');
const addProj = document.querySelector('#add-project');




//Add required event listeners 
addProj.addEventListener('click', () => {
    document.querySelector('#add-project-form').classList.toggle('hidden');
});

submitProj.addEventListener('click', function(e){
    e.preventDefault();
    let formProperties = [];
    for (let i = 0; i < addProjForm.length - 1; i++){ //last element in the addProjForm node list is the submit button
                formProperties.push(addProjForm[i].value);
    }
    addProject(project(formProperties[0], formProperties[1], formProperties[2], formProperties[3], formProperties[4]))
    renderSidebar();
    console.log(projectList);
    addProjForm.reset();
    addProjForm.classList.toggle('hidden')
});

submitTask.addEventListener('click', function(e){
    e.preventDefault();
    let formProperties = [];
    for (let i = 0; i < addTaskForm.length - 1; i++){ //last element in the addTaskForm node list is the submit button
                formProperties.push(addTaskForm[i].value);
    }
});




