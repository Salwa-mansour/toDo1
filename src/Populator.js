import {
   
    tasks,
 
} from './data'


  
    function populaoteCategories(list,categories=[]){
      list.innerHTML  =categories.map((category,i)=>{
        return `
        <div class="category" data-category="${category.id}" data-index="${i}">
        <h1>${category.name}</h1>
        <ul class="toDos">

           
        </ul>
        <div class="add-toDo ">
            <button class="add-task-btn" data-category="${category.id}" >➕ add task</button>
        </div>
        <dialog class="add-task" data-category="${category.id}">
            <form method="dialog" >
                <input type="hidden" value="${category.id}">
                <input type="text" placeholder="add a task">
                <input type="checkbox" name="done">
                <button type="submit">add</button>
            </form>
        </dialog>
    </div>
    `
        }).join('');

    populaoteTasks(tasks,categories);

    }
    function populaoteTasks(tasks,categories){
        //  console.table(tasks)
        categories.forEach(category=>{
            let list = document.querySelector(`div[data-category="${category.id}"] .toDos`);//DOM bended pad practice!
            let listContent="";
            tasks.filter((task)=>{
               if(task.categoryId === category.id){
                listContent +=`
                <li >
                  <p>${task.text}</p>
                  <input type="checkbox" name="done" data-id="${task.id}"  ${task.done ? "checked" : ""} >
                  <button class="delete" data-id="${task.id}" >❌</button>
                  <button class="edit" data-id="${task.id}" >🖊</button>
                  <button class="details" data-id="${task.id}" >...</button>
               </li>`
               }
            });
            list.innerHTML = listContent;
        })
    }



export {
    populaoteCategories,
        populaoteTasks}