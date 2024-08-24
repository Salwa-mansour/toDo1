import { tasks } from "./data";
const container = document.querySelector('#category-container');

function editModal(id){
    const item = tasks.find((task)=>  task.id == id)

    const dialog = `
      
      <dialog class="modal edit-task" data-category="${item.categoryId}">
      <button class="close" >❌</button>
        <h1>edit task</h1>
        <form method="dialog">
            <input type="hidden" value="${item.categoryId}">
            <input type="text" placeholder="add a task" value="${item.text}">
            <input type="checkbox" name="done" data-id="${item.id}"  ${item.done ? "checked" : ""} >
            <button type="submit">submit</button>
        </form>
    </dialog>
    `
    container.innerHTML+=dialog;
    container.querySelector('.edit-task').show();
}

function detailModel(id){
   
    const item = tasks.find((task)=>  task.id == id)
   
    const dialog = `
      
      <dialog class="modal task-details" data-category="${item.categoryId}">
       <button class="close" >❌</button>
            <h1> task details</h1>
        
            <div>
            <h1>${item.text}</h1>
            <p>${item.done ? "done" : "not done yet"}</p>
        
            </div>
    </dialog>
    `
    container.innerHTML+=dialog;
    container.querySelector('.task-details').show();
}
export {
    editModal,
    detailModel
}