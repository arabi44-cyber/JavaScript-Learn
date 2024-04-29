// singleton

// Object.create constructor 
// objects literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Rabi Basnet",
    [mySym]: "mykey1",
    address: "ktm",
    age: 18,
    email: "learnersoul11@gmail.com",
    isLoggenIN: false,
    lastLoginday: ["Monday","Sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])


jsUser.email = "arabi107.com"
// Object.freeze(jsUser)
jsUser.email = "arabi107google.com"
console.log(jsUser);

 
jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
