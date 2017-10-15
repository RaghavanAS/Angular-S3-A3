//Class Animal Declaration
class Animal{
    //public property
    public AnimalName: string;
    //Constructor with a parameter
    constructor(AName: string) {
        this.AnimalName = AName;
    }
    //method with a parameter
    move(DistanceCovered:number): number{
        return DistanceCovered;
    }
    //method with a parameter
    makeSound(AnimalSound:string): string{
        return AnimalSound;
    }
}
//class Tiger which is extending the class Animal
class Tiger extends Animal{
    //constructor of child class Tiger
    constructor(AName: string) {
        //referencing the super class constuctor using super keyword
        super(AName);
    }
    //extending the method from super class
    move(DistanceCovered: number) {
        //calling the super class method
            super.move(DistanceCovered);
            return DistanceCovered;
    }
    //extending the method from super class    
    makeSound(AnimalSound: string) {
        //calling the super class method
        super.makeSound(AnimalSound);
            return AnimalSound;
        }
}
//Class Cat which is extending the class Animal
class Cat extends Animal{
    //child class construcot
    constructor(AName: string) {
        //referencing the super class constructor using super keyword
        super(AName);
    }
   //extending the method from super class
    move(DistanceCovered: number) {
            super.move(DistanceCovered);
            return DistanceCovered;
    }
    //extending the method from super class    
    makeSound(AnimalSound: string) {
        super.makeSound(AnimalSound);
            return AnimalSound;
        }
}
//creating the object for Tiger class and calling the methods
let myTiger = new Tiger("Jimmy");
console.log(`${myTiger.AnimalName} covred a distance of ${myTiger.move(40)}`);
console.log(`${myTiger.AnimalName} makes a sound of ${myTiger.makeSound("HRRR HRRR")}`);
//creating the object for Cat class and calling the methods
let mycat = new Cat("TOM");
console.log(`${mycat.AnimalName} covred a distance of ${mycat.move(40)}`);
console.log(`${mycat.AnimalName} makes a sound of ${mycat.makeSound("Meow Meow")}`);
