console.log("Hello from argvs file");
// console.log(process.argv[2]);


for (let i = 2; i<process.argv.length; i++){
    console.log("hello there", process.argv[i])
}