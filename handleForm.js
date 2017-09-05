function handleFormSubmit(formInput) {
    event.preventDefault();
    // console.log(formInput); // check browser console after submitting the form
}

function updateList(listId, description, priority) {
  let thisTask = new task(parseInt(listId), description.value, priority.value)
  let singleList = document.getElementById(`${listId}`)
  singleList.innerHTML += `<li class=${thisTask.id}><button name=${thisTask.id}>X</button> ${description.value}, ${priority.value}</li>`
}
