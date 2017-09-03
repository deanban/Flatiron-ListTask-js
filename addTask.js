const task = (function createTask() {

  let all = []
  let IdCounter = 0

  return class Task {
    constructor(listId, description, priority) {
      this.listId = listId
      this.description = description
      this.priority = priority
      this.id = ++IdCounter
      all.push(this)
      let currentList = list.find(this.listId)[0]
      currentList.tasks.push(this)
    }

    static find(id) {
      return all.filter(item => item.id === parseInt(id))
    }

    static findByList(listId) {
      return all.filter(item => item.listId === parseInt(listId))
    }

  }
})()
