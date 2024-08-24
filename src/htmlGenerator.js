import { tasks } from "./data";
const container = document.querySelector('#category-container');

function editModal(id){
    const editItem = tasks.find((item)=>  item.id == id)
    console.log(editItem)
    const dialog = `
      
      <dialog class="edit-task" data-category="${editItem.categoryId}">
        <h1>edit task</h1>
        <form method="dialog">
            <input type="hidden" value="${editItem.categoryId}">
            <input type="text" placeholder="add a task" value="${editItem.text}">
            <input type="checkbox" name="done" data-id="${editItem.id}"  ${editItem.done ? "checked" : ""} >
            <button type="submit">submit</button>
        </form>
    </dialog>
    `
    container.innerHTML+=dialog;
    container.querySelector('.edit-task').show();
}

export {
    editModal,
}