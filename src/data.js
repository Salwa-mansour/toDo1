
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