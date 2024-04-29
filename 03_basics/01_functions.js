

function sayYourName (){
    console.log("H");
    console.log("O");
    console.log("W");
    console.log("A");
    console.log("R");
    console.log("E");
}

// sayYourName()
// function addTwoNumbers(number1,number2){

//    console.log( number1+number2)
// }

//  const result = addTwoNumbers(4,55)
//  console.log("Result:", result);


//  function addTwoNumbers(number1,number2){

//     let result = number1 + number2
//     return result
    
//  }
 function addTwoNumbers(number1,number2){

    return number1 + number2
    
 }
 
 
  const result = addTwoNumbers(4,55)

//   console.log("Result:", result);



function loginUserMessage(username = "sam"){
    if (!username){    //!username is equal to username === undefine
        console.log("Please enter a username")
        return

    }
    return`${username} just logged in`

}



// console.log(loginUserMessage("arabi"));
// console.log(loginUserMessage("arabi"));


function calculateCartprice(val1,val2,...num1){
    return num1


}
// console.log(calculateCartprice(200, 600, 400, 2000));
const user={
    username:"arabi",
    price:299
}
function handelObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
handelObject({
    username: "ram",
    price: 200
})

const myNewArray = [200, 455, 555]
function returnSecondValue(getArray){
    return getArray[2]
}
//  console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 788, 999]));
