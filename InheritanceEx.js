var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class Animal Declaration
var Animal = /** @class */ (function () {
    //Constructor with a parameter
    function Animal(AName) {
        this.AnimalName = AName;
    }
    //method with a parameter
    Animal.prototype.move = function (DistanceCovered) {
        return DistanceCovered;
    };
    //method with a parameter
    Animal.prototype.makeSound = function (AnimalSound) {
        return AnimalSound;
    };
    return Animal;
}());
//class Tiger which is extending the class Animal
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    //constructor of child class Tiger
    function Tiger(AName) {
        //referencing the super class constuctor using super keyword
        return _super.call(this, AName) || this;
    }
    //extending the method from super class
    Tiger.prototype.move = function (DistanceCovered) {
        //calling the super class method
        _super.prototype.move.call(this, DistanceCovered);
        return DistanceCovered;
    };
    //extending the method from super class    
    Tiger.prototype.makeSound = function (AnimalSound) {
        //calling the super class method
        _super.prototype.makeSound.call(this, AnimalSound);
        return AnimalSound;
    };
    return Tiger;
}(Animal));
//Class Cat which is extending the class Animal
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    //child class construcot
    function Cat(AName) {
        //referencing the super class constructor using super keyword
        return _super.call(this, AName) || this;
    }
    //extending the method from super class
    Cat.prototype.move = function (DistanceCovered) {
        _super.prototype.move.call(this, DistanceCovered);
        return DistanceCovered;
    };
    //extending the method from super class    
    Cat.prototype.makeSound = function (AnimalSound) {
        _super.prototype.makeSound.call(this, AnimalSound);
        return AnimalSound;
    };
    return Cat;
}(Animal));
//creating the object for Tiger class and calling the methods
var myTiger = new Tiger("Jimmy");
console.log(myTiger.AnimalName + " covred a distance of " + myTiger.move(40));
console.log(myTiger.AnimalName + " makes a sound of " + myTiger.makeSound("HRRR HRRR"));
//creating the object for Cat class and calling the methods
var mycat = new Cat("TOM");
console.log(mycat.AnimalName + " covred a distance of " + mycat.move(40));
console.log(mycat.AnimalName + " makes a sound of " + mycat.makeSound("Meow Meow"));
//# sourceMappingURL=InheritanceEx.js.map