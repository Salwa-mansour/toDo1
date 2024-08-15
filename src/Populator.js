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
                <button type="submit">add</button>
            </form>
        </dialog>
    </div>
    `
        }).join('');

    populaoteTasks(tasks,categories);

    }
    function populaoteTasks(tasks,categories){
        categories.forEach(category=>{
            let list = document.querySelector(`div[data-category="${category.id}"] .toDos`);//DOM bended pad practice!
            let listContent="";
            tasks.filter((task)=>{
               if(task.categoryId === category.id){
                listContent +=`
                <li >
                  <p>${task.text}</p>
                  <input type="checkbox" name="done" >
                  <button class="delete" data-id="${task.id}" >❌</button>
               </li>`
               }
            });
            list.innerHTML = listContent;
        })
    }



export {
    populaoteCategories,
        populaoteTasks}