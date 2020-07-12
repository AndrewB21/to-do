import {projectList} from './projectManager'

const projectsSidebar = document.querySelector('#projects-sidebar');
const projectsWrapper = document.querySelector('#projects-wrapper');


const renderSidebar = () => {
    console.log(projectList);
    projectsSidebar.innerHTML="";
    projectList.forEach((project, index) => {
        let div = document.createElement('div');
        div.id = `project${index}`;
        div.appendChild(document.createTextNode(project['title']));
        projectsSidebar.appendChild(div);
    })
    
}

const renderProjectHeader = (project) => {
    let projectHeader = document.createElement('div');
    projectHeader.id = `project${project.id}-header`;
    
    //Create and assign header content variables
    projectTitle = document.createElement('h2');
    projectDescription = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;

    //Append data to header
    projectHeader.appendChild(projectTitle);
    projecteHeader.appendChild(projectDescription);
}

const renderProjectContent = (project) => {
    let projectContent = document.createElement('div');
    projectContent.id = `project${project.id}-content`;
}


export {renderSidebar};