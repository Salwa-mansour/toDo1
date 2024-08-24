import {
    toDo,
    category,
    tasks,
    categories,
    addItem,
    removeItem,
    changeDoneState,
    editItem
} from './data'

import {
    populaoteCategories,
    populaoteTasks
} from './Populator';
import { editModal } from './htmlGenerator';
import uniqid from 'uniqid';

const domController = function () {
    const container = document.querySelector('#category-container');

    const addCategoryModal = container.querySelector('#add-category');
    const addCategoryForm = addCategoryModal.querySelector('form');
    const addCategoryBtn = container.querySelector('#add-category-btn');
    // const addTaskModal = container.querySelectorAll('.add-task');

    const categoriesList = container.querySelector('#category-container .created-categories');



    function setCategory() {
        const categoryItem = category(uniqid(),addCategoryForm.querySelector('input[type="text"]').value);

        addItem(categories, categoryItem);
        localStorage.setItem('categories', JSON.stringify(categories));
        populaoteCategories(categoriesList, categories);
        addCategoryForm.reset();
    }

    function showTaskModel(e) {
        if (!e.target.matches('.add-task-btn')) return;
        const categoryModel = e.target.dataset.category;
        const categoryBox = container.querySelector(`div[data-category="${categoryModel}"]`)
        // console.log(container.querySelector(`dialog[data-category="${categoryModel}"]`))
        categoryBox.querySelector(`dialog`).showModal();
        categoryBox.querySelector('form').addEventListener('submit', setTask)
    }

    function setTask() {
        const task = toDo(
            uniqid(),
            this.querySelector('input[type="text"]').value,
            this.querySelector('input[type="hidden"]').value,
            this.querySelector('input[type="checkbox"]').checked
        )
        this.reset();
        addItem(tasks, task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        populaoteTasks(tasks, categories);
    }

    function defualtCategories() {
        const cagetory1 = category(uniqid(),'ToDayTasks');
        addItem(categories, cagetory1);
        populaoteCategories(categoriesList, categories);
    }
    addCategoryBtn.addEventListener('click', () => {
        addCategoryModal.showModal()
    });

    function deleteItem(e){
        
        const id =e.target.dataset.id;
        removeItem(id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        populaoteTasks(tasks, categories);
    }

    function doneState(e){
        const id  = e.target.dataset.id;
     
        changeDoneState(id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        populaoteTasks(tasks, categories);
    }
    function editTask(e){
        
        const id  = e.target.dataset.id;    
        editModal(id);
        const form = container.querySelector('.edit-task form');
       
        form.addEventListener('submit',()=>{
            const newData = toDo(
                id,
                form.querySelector('input[type="text"]').value,
                form.querySelector('input[type="hidden"]').value,
                form.querySelector('input[type="checkbox"]').checked
            )
            editItem(id,newData);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            populaoteTasks(tasks, categories);
        })
       

    }

    defualtCategories();

    container.addEventListener('click',(e)=>{
        if(e.target.matches('.add-task-btn')){
            showTaskModel(e);
        }else if(e.target.matches('.delete')){
            deleteItem(e);
        }else if(e.target.matches('li input[name="done"]')){  
            doneState(e);
        }else if(e.target.matches('li .edit')){
            editTask(e);
        }
        
    } );
    addCategoryForm.addEventListener('submit', setCategory)
}


export {
    domController
};