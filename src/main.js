import './style.css';


// generator for todos
// generator for category
// add items to array
//populaote the array
/*
todo object
text 
done
category
maybe date

cagtegory object 
name


*/
const dataGenerator = (function () {
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

    function addToArray(arr,item){
        arr.push(item);
    }

})();

const domController = (function () {
    const addCategoryModal = document.querySelector('#add-category');
    const addCategoryBtn = document.querySelector('#add-category-btn');
    const addTaskModal = document.querySelector('#add-task');
    const addTaskBtn = document.querySelector('#add-task-btn');



    addCategoryBtn.addEventListener('click', () => {
        addCategoryModal.showModal()
    });
    addTaskBtn.addEventListener('click', () => {
        addTaskModal.showModal()
    });
    console.log('boo')
})();