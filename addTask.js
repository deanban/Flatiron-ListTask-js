const task = (function createTask(){
  let IdCounter = 0

  return class Task {
    constructor(listId, description, priority) {
      this.listId = listId
      this.description = description
      this.priority = priority
      this.id = ++IdCounter
      let currentList = list.find(this.listId)[0]
      currentList.tasks.push(this)
    }

    static find(id) {
      return all.filter(item => item.id === parseInt(id))
    }

    deleteTask(listId, id) {
      let parentList = list.find(listId)
      parentList[0].tasks = parentList[0].tasks.filter(task => this.id !== id)
    }
  }
})()
