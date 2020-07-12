const task = function(title, description, deadline, notes, status){
    const changeTitle = function(newTitle){
       this.title = newTitle;
   }

   const changeDescription = function(newDescription){
    this.description = newDescription;
   }

   const changeDeadline = function(newDeadline){
    this.deadline = newDeadline;
   }

   const addNotes = function(newNotes){
    this.notes = notes + newNotes;
   }

   const changeStatus = function(newStatus){
    this.status = newStatus;
   }

   return {title, description, deadline, notes, status, changeTitle, changeDescription, changeDeadline, addNotes, changeStatus}
}

export default task;