function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const volvo = new Car("volvo","6969","1969");
console.log(volvo.year);

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
        console.log(`Welcome back ${this.name}, your age is ${this.age}`);
    }

const person1 = new Person("Sanjay",60);
const person2 = new Person("Ramanathan",69);


// FACTORY FUNCTION
function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r,g,b} = this;
        return {r,g,b};
    }
    color.hex = function() {
        const {r,g,b} = this;
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(255,200,69);

// CONSTRUCTOR FUNCTION IN JS WITH THE OPERATOR "NEW"
function MakeColor(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

MakeColor.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
}

MakeColor.prototype.hex = function(){
        const {r,g,b} = this;
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

MakeColor.prototype.rgba = function(a=1.0){
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
}

const color1 = new MakeColor(0,0,0);
const color2 = new MakeColor(45,55,255);

