import '../src/style.css';

import ListItem from './app-logic/itemMaker.js';
import addToProject from './app-logic/addToProject.js';
import removeFromProject from './app-logic/removeFromProject.js';


console.log('ready to roll!');



const defaultProject = []; // the project that all items are added to by default

///test: first list item
const testItem = new ListItem('Laundry', 'do the laundry', 'today', '2');

addToProject(defaultProject, testItem);
console.log(defaultProject); // addToProject works


const test2 = new ListItem ('TEST', 'test', 'today', '1');
addToProject(defaultProject, test2);
console.log(defaultProject);



