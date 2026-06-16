// object = a collection of related properties and/or methods
//          can represent the real world objects (people,products,places)
//          object = {key:value,
//                      function()}

const person1 = {
    firstName: "Spongebob",
    lastName : "Sqaurepants",
    age : 30,
    isEmployed : true,
}

console.log(person1.firstName);
console.log(person1.lastName);

// objects can also have dedicated functions , known as methods

const person2 = {
    firstName : "Patrick",
    lastName : "Squarepants",
    age : 50,
    isEmployed : false,
    sayHello : function(){
        console.log("Hi ! I am patrick");
    },

}
person2.sayHello();
