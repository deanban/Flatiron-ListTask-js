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

      static all() {
        return all
      }

      static find(id) {
        return all.filter(item => item.id === parseInt(id))
      }

    }
  })()

function populateLists() {
  let options = ""
  let list_instances = ""
  let lists = list.all()
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i]
    options += `<option id="list_${list.id}" value="${list.id}">${list.title}</option>`
    list_instances += `<div id="${list.id}"><h2>${list.title}</h2></div>`
  }

  document.getElementById("all_tasks").innerHTML = options
  document.getElementById("all_lists").innerHTML = list_instances
}
