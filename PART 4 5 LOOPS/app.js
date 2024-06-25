let todo = []; 

// infinite loop
while(true){
    let req = prompt("Enter your request");


    if(req == "list"){
        for(let i=1;i<= todo.length;i++){
            console.log(i, todo[i-1]);
        }
    }
    else if(req == "add"){
        let task = prompt("Enter new task.")
        todo.push(task);
        console.log("Task Added!");
    }
    else if(req == "delete"){
        let idx = prompt("Enter task no. to be deleted");
        todo.splice(idx-1, 1);
        console.log("Task deleted!")
    }
    else if(req == "quit"){
        console.log("App closed!")
        break;
    }
    else{
        console.log("Invalid request!")
    }
}