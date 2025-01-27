let command = prompt("What do you want to do");
const todoArray = [];
while(command !== "quit" && command !== "q"){
    if(command === "list"){
        console.log("*************");
        for(let i =0; i<todoArray.length; i++){
            console.log(`${i}: ${todoArray[i]}`);
        }
        console.log("************");
    } else if(command === "new"){
        const enter = prompt("What do you want to enter:");
        todoArray.push(enter);
        console.log(`${enter} has been added to the list`);
    } else if(command === "delete"){
        const indexToDelete = prompt("What index do you want to delete?");
        todoArray.splice(indexToDelete,1);
    } else{
        command = prompt("Enter a valid command as shown in the page");
    }
    command = prompt("What do you want to do");
}