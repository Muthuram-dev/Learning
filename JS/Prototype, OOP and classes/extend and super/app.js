class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`
    }
   
}


class Cat extends Pet {
    meow(){
        return "Meow"
    }
}

class Dog extends Pet {
    bark(){
        return "Bark!"
    }
}






const cat1 = new Cat("Sugar", 3);
const dog1 = new Dog("Salt", 13);