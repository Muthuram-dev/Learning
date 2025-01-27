let command = prompt("What do you want to do:");
const todoArray = [];

while(command.toLowerCase() !== "quit" && command.toLowerCase() !== "q"){
    if (command.toLowerCase() === "list"){
        console.log("**********");
        for(let i = 0; i<todoArray.length; i++){
            console.log(`${i} : ${todoArray[i]}`);
        }
        console.log("**********");
    }
    else if(command.toLowerCase() === "new"){
        const newTodo = prompt("Enter the thing you want to enter:");
        todoArray.push(newTodo);
        console.log(`${newTodo} has been added to the list`);
    } else if (command.toLowerCase() === "delete"){
        const index = prompt("What is the index that you want to delete from the list");
        todoArray.splice(index, 1);
    }
    command = prompt("what do you want to do:");
}
