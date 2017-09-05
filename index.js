document.addEventListener("DOMContentLoaded", () => {

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
  })

  const taskDescription = document.get
  const taskPriority = document.getElementById("priority_level")
  const taskPriority = document.getElementById("priority_level")

  const newTask = document.getElementById("task_create")

  newTask.addEventListener("submit", () => {
    handleFormSubmit(taskPriority)
  })

  const addAttributes = document.getElementById("add_attributes")

  addAttributes.addEventListener("submit", () => {
    updateList()
  })

})
