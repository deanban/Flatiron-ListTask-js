const list = (function createList() {

  let all = []
  let IdCounter = 0

  return class List {
    constructor(title){
      this.tasks = []
      this.title = title
      this.id = ++IdCounter
      all.push(this)
    }

      static find(id) {
        return all.filter(item => item.id === parseInt(id))
      }
      static find_by_title(title){
        return all.filter(item => item.title === title)
      }
      static delete_by_id(id){
        all = all.filter(item => item.id !== id)

      }
  }
})()