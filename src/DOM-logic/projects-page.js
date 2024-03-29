// module governing the display of the 'Project' view in the main window'
import projectManager from "../app-logic/projectManager";

const projectsPage =  (allProjects, project = allProjects[1]) => {
    console.log(project);
    const main = document.getElementById("mainWindow");
    main.innerHTML = '';

    const title = document.createElement('h3');
    title.textContent = "Viewing Project:"  ; 

    let titleDiv = document.createElement('div');
    let projectTitle = document.createElement('h4');
    projectTitle.style = "font-weight: 1000; margin-left: 10vw";
    projectTitle.textContent = project[0]; // displays title of loaded project
    

   

    function addRenameEventListener () {
    if (project[0] != "defaultProject") {
    projectTitle.addEventListener('click', function renameTitle () { // title renaming functionality
        projectTitle.removeEventListener('click', renameTitle);
        const notification = document.createElement('span')
        notification.textContent = "Please input a new Project name."
        titleDiv.appendChild (notification);

        const titleField = document.createElement('input');
        titleField.type = 'field';
        titleDiv.appendChild (titleField);
        titleField.focus();

        titleField.addEventListener('keypress', function (event) { // a value is entered
            if (event.key === 'Enter' && titleField.value != '') {
                            
                const userInput = titleField.value;
                // project[0] = userInput;
                // projectTitle.textContent = userInput;
                projectManager(allProjects).renameProject(project, userInput);

            }
        });
    
        
        titleField.addEventListener('focusout', () => { // focused out = close the field and reset the fn
            titleDiv.removeChild(titleField);
            titleDiv.removeChild(notification);
            addRenameEventListener();
        })

        })};
    };
    addRenameEventListener();

    main.appendChild(title);
    titleDiv.appendChild(projectTitle);
    main.appendChild(titleDiv);

    
    // list project items

    const projectList = document.createElement('ul');
    
    project.forEach(item => {
        if (item.title) {
            const liItem = document.createElement('li');
            liItem.classList = "liItem";
            const itemDiv = document.createElement('div');
            const completed = document.createElement('input');
            const title = document.createElement('span');
            const date = document.createElement('span');
            const priority = item.priority;

            

            //priority colors: 0 - black; 1 - blue; 2 - red
            if (priority === 1) {
                itemDiv.style = "color: blue";
            } else if (priority === 2) {
                itemDiv.style = "color: red";
            }

            completed.type = 'checkbox';
            itemDiv.appendChild (completed);
            
            title.textContent = item.title; 
            itemDiv.appendChild(title);

            date.textContent = item.dueDate;
            itemDiv.appendChild(date);

            liItem.appendChild(itemDiv);
            projectList.appendChild(liItem);



        }
    });


    main.appendChild(projectList);
    

    // each li item contains: title, dueDate, priority color coding, completed checkbox '
    
    //edit each of these features in the individual item view


}

export default projectsPage;