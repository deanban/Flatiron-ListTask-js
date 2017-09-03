// document.addEventListener("DOMContentLoaded", () =>{
// 	// alert("loaded")
// 	// const newButton = document.querySelector("#find-meme-button")
// 	// // console.log(newButton)
// 	const sel = document.getElementById("selectList")
// 	for(let i = 0; i < list.length; i++) {
//     	let opt = list[i];
//     	let el = document.createElement("option");
//     	el.textContent = opt;
//     	el.value = opt;
//     	select.appendChild(el);
// }​
// 	// console.log(giphyDiv)
// 	// const form = document.getElementById("simple-form")
// 	// const formInput = document.getElementById("form-input")
	
// 	// form.addEventListener("submit", ()=>{
// 	// 	handleFormSubmit(formInput)
// 	// })

// 	// newButton.addEventListener("click", ()=>{
// 	// 	findGif(giphyDiv)
// 	// })
// })
function addList(){

  $('#add_list').on('submit', function(event){
    let newList = new list($('#list_title').val())
    $('#select_list').append(`<option value=${newList.id}>${newList.title}</option>`)
    $('#add_task').show()
    $('#lists').append(`<div id='tasks_div_${newList.id}' class="list"><h2><button class="destroy-list">x</button> ${newList.title}</h2><ul id="${newList.id}" data-id="${newList.id}"></ul></div>`)
    $('#add_list')[0].reset()
    $('#task_description').focus()
    event.preventDefault()
  })
}