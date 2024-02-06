// module to generate the base page layout
import projectManager from "../app-logic/projectManager";

const populatePage = (allProjects) => {
    const header = document.getElementById("header");
    const main = document.getElementById("main");

    //create a styled header
    const hero = document.createElement("h1");
    hero.textContent = "placeholder" // will be replaced when changing between screens 
    header.appendChild(hero);



    // create a gridded body with a sidebar for navigating btw projects & items
    const sidebar = document.createElement('div');
    const projectsList = document.createElement('ul');

    function createSidebarList  () { 
        //begin by wiping content
        projectsList.innerHTML = '';

        allProjects.forEach(project => {
            let myProject = document.createElement('li');
            myProject.textContent = project[0]; // display the title of the project
            
            let myItemsList = document.createElement('ul');
    
                project.forEach(item => { // loop to display the title of each ITEM
                    if (item.title) { 
                        let myItem = document.createElement('li');
                        myItem.textContent = item.title;
                        myItemsList.appendChild(myItem);
                    };
                });
    
                //btn to add new item to project
                let addItemBtn = document.createElement('button');
                addItemBtn.textContent = 'ADD NEW ITEM';
                addItemBtn.id = "addItemBtn";
                addItemBtn.classList = (project[0]); // class list provides project title
                myItemsList.appendChild(addItemBtn);


                //adding event listeners 
                


            myProject.appendChild(myItemsList)
    
            projectsList.appendChild(myProject);
            console.log(myProject);
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

    


    };
    createSidebarList();
    
    





    sidebar.appendChild(projectsList);
    main.appendChild(sidebar);

}

export default populatePage;

