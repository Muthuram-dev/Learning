// BASICS OF ARRAY< CREATING, MODIFYING

// let games = ["GTA","RE","Spiderman",888];
// games[0] = "GTA V";
// console.log(games);
// console.log(games.length);
// games[100] = "GoW";
// console.log(games.length);

//PUSH AND POP

// let queue = ["Nandha", "naandhan" , "neethan"];
// queue.push("Nammo tha", "Avlothan"); //You can add multiple arguments in the push method.
// queue.pop(); //Removes the last element, in this case it's "AVLOTHAN"

//SHIFT AND UNSHIFT

// console.log("BEFORE SHIFTING");
// let line = [4,1,2,3,5];
// console.log(line);
// console.log("AFTER SHIFTING");
// line.shift(); //Removes the element 4 from the array
// console.log(line);
// console.log("AFTER UNSHIFTING THE ELEMENT 0 ");
// line.unshift(0); //Adds the element 0 in the beginning of the array
// console.log(line);

// CONCATING ARRAYS AND INCLUDES AND INDEXOF

// let array1 = [1,2,3];
// let array2 = [4,5,6];
// console.log("Using concat method in array");

// let array3 = array1.concat(array2);
// console.log(array3);
// let array4 = array2.concat(array1);
// console.log(array4);

// console.log("Using includes() method in array");

// console.log(array1.includes(2)); //returns true
// console.log(array2.includes(69));//returns false

// console.log("Using indexOf method in array");

// console.log(array1.indexOf(3)); // returns 2

// console.log("Using the reverse() method in array3");
// console.log(array3.reverse());

// SLICE AND SPLICE
// let colors = ["red", "yellow", "blue", "black", "white", "Violet" , "orange", "grey", "somecolor"];
// // console.log("Just remember that the arguments you pass onto the slice method will include the first element that you  are passing onto the method but it will ignore the last element which you specify in the second argument");
// console.log(colors.slice(2, 4));
// console.log(colors.splice(2,4));
// colors.splice(4,0,"addedColor")
// console.log(colors);


//SORT
// let num = [-1,1000,100,245,2,3,4,1,'hi'];
// console.log(num.sort());
//Sort method won't sort the array in decending or ascending order based on the characters precedence, it utlizes the UTF-16 code of each characters inside the array and sort them according to that which makes it's useless to use this method to sort the array.

//REFERENCE TYPE
// let num = [1,2,3];
// let numCopy = [1,2,3];
// console.log(num===numCopy); //It will give false as the output because array uses reference to store the datastructure in the memory, even if the characters inside the array is same, it will have different reference in memory.

// let num = [1,2,3,4];
// let nums = num;
// console.log(num === nums); // This returns True because it is referring to the same reference in the memory

//CONST ARRAY
// const array1 = [1,2,3,4,5];
// console.log(array1.push(5)); // Won't give an error, it will push the element, unless or until you change the data type that is being assigned to the variable, it produce any errors.

// MULTI DIMENSIONAL ARRAY
// let array = [[1,2,3],
//              [4,5,6],
//              [7,8,9]];
// console.log(array[1][1]); //Returned 5










