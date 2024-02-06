// module responsible for placing listItems into "project" arrays

//how items are added
const addToProject = (array, object, index = undefined) => {
    if (index === undefined) { // no specified index
        array.push(object); // object is added at the end
    } else if (index <= array.length()) {
        array.splice(index, 0, object); //object goes to specified index
    } else {
        console.log ('addToProject ERROR');
    }
        
}


export default addToProject;
