document.addEventListener("DOMContentLoaded", () => {
 let  form = document.querySelector('form').addEventListener('submit',  (e) =>{
  e.preventDefault();
  creatingTodoApp(e.target.new_task.value)
 form.reset()
 })

 })
 
function creatingTodoApp(main){
   let li = document.createElement('li')
   let button = document.createElement('button')
  button.addEventListener('click',  deleteItems)
  button.textContent = 'Delete Item'
  li.textContent =`${main}`
  li.appendChild(button)

document.querySelector('#list').appendChild(li)
}
function deleteItems(e){
  e.target.parentNode.remove()
}