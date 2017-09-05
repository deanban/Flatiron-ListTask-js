document.addEventListener("DOMContentLoaded", () => {

  let addAttributes;

  const newList = document.querySelector("#create_list")

  const listTitle = document.getElementById("listTitle")

  const selectList = document.getElementById('select_list')

  const addTaskForm = `<label for="">Select List:</label><br>
    <select id="all_tasks" class="" name="">

    </select><br><br>
    <label for="">Task Description:</label><br>
    <input id="task_description" type="text" name="" value=""><br><br>
    <label for="">Priority level:</label><br>
    <input id="priority_level" type="text" name="" value="">
    <button id="add_attributes" type="submit" name="button">(+)add</button>`

  const listForm = document.getElementById("list_create")

  listForm.addEventListener("submit", () => {
    handleFormSubmit(listTitle.value)
  })

  const formInput = document.getElementById("form-input")

  newList.addEventListener("click", () => {

    new list(listTitle.value)

    if (selectList.innerHTML.includes(addTaskForm) === false) {
      selectList.innerHTML = addTaskForm
    }

    populateLists()

    addAttributes = document.getElementById("add_attributes")

    addAttributes.addEventListener("click", () => {
      const allLists = document.getElementById("all_tasks")
      const listId = allLists.options[allLists.selectedIndex].value
      const taskDescription = document.getElementById("task_description")
      const taskPriority = document.getElementById("priority_level")
      updateList(listId, taskDescription, taskPriority)

      const listButton = document.getElementById("1")

      listButton.addEventListener('click', () => {
        console.log("This has been clicked")
        console.log(listButton.id)
        let thisList = list.find(parseInt(listButton.id))
        list.delete_by_id(parseInt(listButton.id))
        document.getElementById(listButton.id).innerHTML = ""
      })


    })
  })

  const newTask = document.getElementById("task_create")

  newTask.addEventListener("submit", () => {
    handleFormSubmit(listId)
  })


})
