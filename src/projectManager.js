import project from './projects'

let projectList = [];
    
const addProject = function(project){
    project.id = (projectList.length)
    projectList.push(project);
}

export {projectList, addProject};