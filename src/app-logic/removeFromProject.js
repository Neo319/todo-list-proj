// module governing how items can be removed from 'project' arrays

// how items are removed
const removeFromProject = (array, itemIndex) => {

    if (!(itemIndex <= array.length)) {
        console.log ("removeFromProject ERROR");
    } else {
        array.splice(itemIndex, 1)
    }
}

export default removeFromProject;