
    let tasks = [];
    let categories = [];
    function toDo(text, category) {
        return {
            id,
            text,
            categoryId,
            done: false
        }
    }

    function category(id,name) {
        return {
            id,
            name
        }
    }

    function addItem(arr,item){
        arr.push(item);
    }

    // return{
    //     toDo,
    //     category,
    //    tasks,
    //    categories,
    //     addItem
    // }


export {
        toDo,
        category,
        tasks,
        categories,
        addItem
        } ;