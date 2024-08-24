

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let categories = JSON.parse(localStorage.getItem('categories')) || [];
    function toDo(id,text, categoryId,done = false) {
        return {
            id,
            text,
            categoryId,
            done
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

    function removeItem(id){
        
        tasks = tasks.filter((item)=> {
            return item.id !== id
        })
     
    }
    function changeDoneState(id,arr = tasks){
        
        arr = arr.find((item)=>{
            if(item.id == id){
         
                item.done = !item.done;
            }
        })
    }
    function editItem(id ,newData){
  
    tasks =  tasks.map((item)=>{
        if(item.id == id){
         
            item = newData;
      
        }
            return item;
        
       })

    }
  

export {
        toDo,
        category,
        tasks,
        categories,
        addItem,
        removeItem,
        changeDoneState,
        editItem
        } ;