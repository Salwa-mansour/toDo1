import './style.css';

const data = (function () {
    let tasks = [];
    let categories = [];
    function toDo(text, category) {
        return {
            text,
            category,
            done: false
        }
    }

    function category(name) {
        return {
            name
        }
    }

    function addItem(arr,item){
        arr.push(item);
    }

    return{
        toDo,
        category,
       tasks,
       categories,
        addItem
    }
})();

const dataPopulator = (function(){
  
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

    populaoteTasks(data.tasks,data.categories);

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

    return {
        populaoteCategories,
        populaoteTasks
    }
})();

const domController = (function () {
    const container = document.querySelector('#category-container');

    const addCategoryModal = container.querySelector('#add-category');
    const addCategoryForm = addCategoryModal.querySelector('form');
    const addCategoryBtn = container.querySelector('#add-category-btn');
    // const addTaskModal = container.querySelectorAll('.add-task');

    const categoriesList =container.querySelector('#category-container .created-categories');
    


    function setCategory(){
      const category =data.category(this.querySelector('input[type="text"]').value);
     
      data.addItem(data.categories,category);
      
      dataPopulator.populaoteCategories(categoriesList,data.categories);
      this.reset();
    }

    function showTaskModel(e){
        if(!e.target.matches('.add-task-btn')) return;
        const categoryModel = e.target.dataset.category;
        const categoryBox = container.querySelector(`div[data-category="${categoryModel}"]`)
        // console.log(container.querySelector(`dialog[data-category="${categoryModel}"]`))
        categoryBox.querySelector(`dialog`).showModal(); 
        categoryBox.querySelector('form').addEventListener('submit',setTask)
    }
    function setTask(){
        const task = data.toDo(
            this.querySelector('input[type="text"]').value,
            this.querySelector('input[type="hidden"]').value
        )
        this.reset();
        data.addItem(data.tasks,task);
     
        dataPopulator.populaoteTasks(data.tasks,data.categories);
    }
    function defualtCategories(){
        const cagetory1=data.category('ToDayTasks');
        data.addItem(data.categories,cagetory1);
        dataPopulator.populaoteCategories(categoriesList,data.categories);
    }
    addCategoryBtn.addEventListener('click', () => {
        addCategoryModal.showModal()
    });
    defualtCategories();
    document.addEventListener('click',showTaskModel);
    addCategoryForm.addEventListener('submit',setCategory)
})();