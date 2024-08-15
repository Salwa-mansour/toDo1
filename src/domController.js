import {
    toDo,
    category,
    tasks,
    categories,
    addItem
} from './data'

import {
    populaoteCategories,
    populaoteTasks
} from './Populator';


const domController = function () {
    const container = document.querySelector('#category-container');

    const addCategoryModal = container.querySelector('#add-category');
    const addCategoryForm = addCategoryModal.querySelector('form');
    const addCategoryBtn = container.querySelector('#add-category-btn');
    // const addTaskModal = container.querySelectorAll('.add-task');

    const categoriesList = container.querySelector('#category-container .created-categories');



    function setCategory() {
        const categoryItem = category(this.querySelector('input[type="text"]').value);

        addItem(categories, categoryItem);

        populaoteCategories(categoriesList, categories);
        this.reset();
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
            this.querySelector('input[type="text"]').value,
            this.querySelector('input[type="hidden"]').value
        )
        this.reset();
        addItem(tasks, task);

        populaoteTasks(tasks, categories);
    }

    function defualtCategories() {
        const cagetory1 = category('ToDayTasks');
        addItem(categories, cagetory1);
        populaoteCategories(categoriesList, categories);
    }
    addCategoryBtn.addEventListener('click', () => {
        addCategoryModal.showModal()
    });
    defualtCategories();
    document.addEventListener('click', showTaskModel);
    addCategoryForm.addEventListener('submit', setCategory)
}


export {
    domController
};