const task = (function createTask(){
  // let all = []
  let IdCounter = 0

  return class Task {
    constructor(listId, description, priority) {
      this.listId = listId
      this.description = description
      this.priority = priority
      this.id = ++IdCounter
      // all.push(this)
      let currentList = list.find(this.listId)[0]
      currentList.tasks.push(this)
    }

    static find(id) {
      return all.filter(item => item.id === parseInt(id))
    }

    // static findByList(listId) {
    //   return all.filter(item => item.listId === parseInt(listId))
    // }

    deleteTask(listId, id) {
      // console.log(this)
      let parentList = list.find(listId)
      // debugger
      parentList[0].tasks = parentList[0].tasks.filter(task => this.id !== id)
    }
  }
})()
// let task = function createTasks() {
//   let IdCounter = 0
//   let all = []

//   return class Task {
//     constructor (description, priority, list) {
//       this.description = description
//       this.priority = priority
//       this.id = ++IdCounter
//       this.list = list
//       list.tasks.push(this)
//       all.push(this)
//       return this
//     }

//     static find(id) {
//         return all.filter(item => item.id === parseInt(id))
//     }
//     static deleteTask(id) {
//      let task = Task.find(id)
//      debugger
//      let task_index = task.list.tasks.indexOf(task)
//        task.list.tasks.splice(task_index, 1)
//        console.log(`Deleted task ${task.id} from list position ${task_index}`)
//      }

  
// }
// }()
// const task = function createTask(){
//   return class Task {
//     constructor(list, description, priority){
//       this.list = list
//       this.description = description
//       this.priority = priority
//       this.list.tasks.push(this)
//     }
//   }


