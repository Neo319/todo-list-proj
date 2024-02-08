// module to generate the base page layout
import projectManager from "../app-logic/projectManager";
import projectsPage from "./projects-page";

const populatePage = (allProjects) => {
    const header = document.getElementById("header");
    const main = document.getElementById("sidebar");

    //create a styled header
    const hero = document.createElement("h1");
    hero.textContent = "placeholder" // will be replaced when changing between screens 
    hero.id = "hero";
    header.appendChild(hero);

    let loadedProject = 'defaultProject'; // which project is currently loaded in the main window



    // create a gridded body with a sidebar for navigating btw projects & items
    const sidebar = document.createElement('div');
    const projectsList = document.createElement('ul');

    function createSidebarList  () { 
        //begin by wiping content
        projectsList.innerHTML = '';

        allProjects.forEach(project => {
            let projectIndex = allProjects.indexOf(project);

            let myProject = document.createElement('li');

            let myProjectTitle = document.createElement('span');
            myProjectTitle.textContent = project[0]; // display the title of the project
            myProjectTitle.classList = ("project-title");
            myProject.appendChild(myProjectTitle);

            // add event listeners for changing loaded project
            myProjectTitle.addEventListener('click', () => {
                reloadMainWindow(project);
                loadedProject = project[0];
            })


            let myItemsList = document.createElement('ul');
    
                project.forEach(item => { // loop to display the title of each ITEM
                    if (item.title) { 
                        let myItem = document.createElement('li');

                        let itemDiv = document.createElement('div');
                        let itemSpan = document.createElement('span');
                        

                        itemSpan.textContent = item.title;

                        //btn for removing an item
                        const removeItemBtn = document.createElement('button');
                        removeItemBtn.textContent = "x";
                        removeItemBtn.classList = projectIndex;

                        removeItemBtn.addEventListener('click', () => {
                           projectManager(allProjects).removeItem(allProjects.indexOf(project), project.indexOf(item));
                           createSidebarList();
                           if (loadedProject === project[0]) {reloadMainWindow(project)}; //reload window when an item is deleted if the same project is loaded
                        });


                        itemDiv.appendChild(itemSpan);
                        itemDiv.appendChild(removeItemBtn);
                        myItem.appendChild(itemDiv);



                        myItemsList.appendChild(myItem);
                    };
                });
    
                //btn to add new item to project
                let addItemBtn = document.createElement('button');
                addItemBtn.textContent = 'ADD NEW ITEM';
                addItemBtn.id = "addItemBtn";
                addItemBtn.classList = (project[0]); // class list provides project title
                

                //adding event listeners 
                // on click, addListItem is called & given the index of the current project to have a new item added
                addItemBtn.addEventListener('click', () => {
                    projectManager(allProjects).addListItem(allProjects.indexOf(project));
                    createSidebarList();
                    if (loadedProject === project[0]) {reloadMainWindow(project)}; 
                });
            
                myItemsList.appendChild(addItemBtn);
            
                

            myProject.appendChild(myItemsList)


            //btn for removing a project -- not defaultProject
            if (project[0] !== 'defaultProject') {
                let removeProjBtn = document.createElement("button");
                removeProjBtn.textContent = "Remove Project";
                removeProjBtn.addEventListener('click', () => {
                    projectManager(allProjects).removeProject(allProjects.indexOf(project));
                    createSidebarList();
                })

            myProject.appendChild(removeProjBtn); 
            }
            
    
            projectsList.appendChild(myProject);

        });



    //btn to add new project
    const newProjBtn = document.createElement('button');
    newProjBtn.textContent = "ADD NEW PROJECT";
    newProjBtn.id = "newProjBtn";
    projectsList.appendChild(newProjBtn);


    //adding event listeners
    newProjBtn.addEventListener('click', () => {
        projectManager(allProjects).createNewProject(); // adds a new project to allprojects
        createSidebarList(); // reloads sidebar content
    });



    console.log(allProjects);
    };
    createSidebarList();
    
    


    sidebar.appendChild(projectsList);
    main.appendChild(sidebar);


    function reloadMainWindow (project) {
        projectsPage(project);
    }

}

export default populatePage;

