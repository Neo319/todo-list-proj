// module governing the display of the 'Project' view in the main window

const projectsPage =  (project) => {
    const main = document.getElementById("mainWindow");
    main.innerHTML = '';

    const title = document.createElement('h3');
    title.textContent = "Viewing Project: " + project[0]; // displays title of loaded project
    
    main.appendChild(title);


    // dynamically display the name of the loaded project
    
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