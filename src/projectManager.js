import project from './projects'

let projectList = [];
    
const addProject = function(project){
    project.id = (projectList.length-1)
    projectList.push(project);
}

export {projectList, addProject};