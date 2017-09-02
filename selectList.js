const task = (function createTask() {

  let all = []
  let IdCounter = 0

  return class Task {
    constructor(list_id, description, priority) {
      this.list_id = list_id
      this.description = description
      this.priority = priority
      this.id = ++IdCounter
      all.push(this)
      let currentList = list.find(this.list_id)[0]
      currentList.tasks.push(this)
    }

    static find(id) {
      return all.filter(item => item.id === parseInt(id))
    }

  }
})()
