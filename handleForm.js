function handleFormSubmit(formInput) {
    event.preventDefault();
    // console.log(formInput); // check browser console after submitting the form
}

function updateList(listId, description, priority) {
  new task(parseInt(listId), description.value, priority.value)

  
}
