import '../src/style.css';

import ListItem from './app-logic/itemMaker.js';
import addToProject from './app-logic/addToProject.js';
import removeFromProject from './app-logic/removeFromProject.js';

import populatePage from './DOM-logic/populate-sidebar.js';

console.log('ready to roll!');



const defaultProject = ['defaultProject']; // the project that all items are added to by default
// the first item in every project array is a string containing its title

const testItem = new ListItem('Laundry', 'do the laundry', 'today', '2');

addToProject(defaultProject, testItem);


const test2 = new ListItem ('TEST', 'test', 'today', '1');
addToProject(defaultProject, test2);



const allProjects = [defaultProject];
populatePage(allProjects);

console.log(allProjects);


// add event listeners to create new items

