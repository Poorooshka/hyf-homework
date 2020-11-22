"use strict";

let myName = "";
let activityList = [];

function getReply(command) {


    if(command.startsWith("Hello my name is")) {

        const lastWord = command.lastIndexOf(" ");
        const name = command.substring(lastWord);
        
        return `nice to meet you${name}!`
    }

    if(command === "What is my name?") {
        if (myName) {
            return `Your name is ${myName}.` }
            else {
                return `Your name does not exist` }
        }
    
    if(command.startsWith("Add")) {
        const toDoIndex = command.lastIndexOf('to my todo');
        const toDo = command.slice(3, toDoIndex);
        activityList.push(toDo);
        console.log(activityList);
        return `${toDo} added to your todo`;
    }

   if(command.startsWith("Remove")) {
       const toDoIndex = command.lastIndexOf('from my todo');
       const toDo =command.slice(6, toDoIndex);
       for (let i=0; i < activityList.length; i++) {
           if(activityList[i] === toDo) {
            const arrayIndex = activityList.indexOf(toDo);
            activityList.splice(arrayIndex, 1);
            return `Removed ${toDo}from your todo`;

           }
       }     
   }

if(command === "What is on my todo?"){
    const numberOfItems = activityList.length;
    const listOfItems = activityList.join();
    return `You have ${numberOfItems} todos- ${listOfItems}.`
}

if(command === "What day is it today?") {
    const date = new Date();
    const today = date.toDateString();
    return `Today is ${today}`;
}

if(command.includes('+') || command.includes('-') || command.includes('*') || command.includes('/')) {
    const commandArr = command.split(" ");
    const num1 = parseInt(commandArr[2]);
    const num2 = parseInt(commandArr[4]);
    if(commandArr[3] === "+") {
       const sum = num1 + num2;
       return `The sum of two numbers equals ${sum}`; }
    
    else if(commandArr[3] === "-") {
     const sub = num1 - num2;
     return `The subtraction of two numbers equals ${sub}`; }

     else if(commandArr[3] === "*") {
         const multi = num1 * num2;
         return `The multiplication of two numbers equals ${multi}`;
     }
    else if(commandArr[3] === "/") {
        const div = num1/num2;
        return `The division of two numbers equals ${div}`;
    }

if(command.startsWith("Set a timer")) {
    const commandArray = command.split(" ");
    const time = commandArray[4] * 60000;
    return `Timer set for ${commandArray[4]} minutes`;
    setTimeout(getTime(), time);
    
}
function getTime() {
    console.log("Timer done")
} 
}



console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("What is my name?")); 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add baking a cake to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 13 + 45"));
console.log(getReply("What is 12 - 9"));
console.log(getReply("Set a timer for 2 minutes"));