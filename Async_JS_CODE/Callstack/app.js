const multiple = (x,y) => (x + y);

const square = (x) => multiple(x,x);

const isRightAngleTriangle = (a,b,c) => {
    square(a) + square(b) === square(c);
}

console.log("BEFORE BREAKPOINT!")
isRightAngleTriangle(3,4,5);
console.log("AFTER BREAKPOINT!")