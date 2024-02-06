// module responsible for creating to do list objects, given their properties

    class ListItem {
        constructor(title, description, dueDate, priority, completed) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.completed = completed;
            
        };
        
        getTitle () {
            return this.title;
        }

        setTitle (newTitle) {
            this.title = newTitle;
            return this.title;
        }

    }


export default ListItem;