// module for adding, removing, and editing projects
import ListItem from "../app-logic/itemMaker";

const projectManager = (allProjects) => {

        function createNewProject () { // create new project whose contents can be edited elsewhere, 
            let myItem = new ListItem ('New To-do item', 'description', 'today', 1, false);
            let myProj = ['New Project', myItem];
            allProjects.push(myProj);
        }

        function addListItem (projectIndex) {
            let myItem = new ListItem ('New To-do item', 'description', 'today', 1, false);
            
            let project = allProjects[projectIndex];
            project.push(myItem);
        }

        function removeProject (projectIndex) {
            allProjects.splice(projectIndex, 1);
        };

        function removeItem (projectIndex, itemIndex) {
            let project = allProjects[projectIndex];
            project.splice(itemIndex, 1);
        }

    return {
        createNewProject,
        addListItem,
        removeProject,
        removeItem,
    }
}

export default projectManager;