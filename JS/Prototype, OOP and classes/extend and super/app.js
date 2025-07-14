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
    constructor(name, age, livesLeft){
        super(name, age);
        this.livesLeft = livesLeft;

    }
    meow(){
        return "Meow"
    }
}

class Dog extends Pet {
    bark(){
        return "Bark!"
    }
}




const kitkat = new Cat("Sugar", 3, 7);
const diaryMilk = new Dog("Salt", 13);