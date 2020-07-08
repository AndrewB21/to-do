const task = (title, description, deadline, notes, status) => {
    this.title = title;
    this.deadline = deadline;


    const changeTitle = (newTitle) => {
        title = newTitle;
    }

    const changeDescription = (newDescription) => {
        description = newDescription;
    }

    const changeDeadline = (newDeadline) => {
        deadline = newDeadline;
    }

    const addNotes = (newNotes) => {
        notes = this.notes + newNotes;
    }

    const changeStatus = (newStatus) => {
        status = newStatus;
    }

    return {title, 
            description, 
            deadline, 
            notes, 
            status, 
            changeTitle, 
            changeDescription, 
            changeDeadline, 
            addNotes, 
            changeStatus
        }
}