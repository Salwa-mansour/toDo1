import {
   
    tasks,
 
} from './data'


  
    function populaoteCategories(list,categories=[]){
      list.innerHTML  =categories.map((category,i)=>{
        return `
        <div class="category" data-category="${category.name}" data-index="${i}">
        <h1>${category.name}</h1>
        <ul class="toDos">

           
        </ul>
        <div class="add-toDo ">
            <button class="add-task-btn" data-category="${category.name}" >➕ add task</button>
        </div>
        <dialog class="add-task" data-category="${category.name}">
            <form method="dialog" >
                <input type="hidden" value="${category.name}">
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
            let list = document.querySelector(`div[data-category="${category.name}"] .toDos`);//DOM bended pad practice!
            let listContent="";
            tasks.filter((task)=>{
               if(task.category === category.name){
                listContent +=`
                <li>
                  <p>${task.text}</p>
                  <input type="checkbox" name="done" >
                  <button class="delete">❌</button>
               </li>`
               }
            });
            list.innerHTML = listContent;
        })
    }



export {
    populaoteCategories,
        populaoteTasks}