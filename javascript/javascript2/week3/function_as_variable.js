//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions:

const a = function() { console.log ("This is the first function")}
const b = function() { console.log ("This is the second function")}
const c = function() { console.log ("This is the third function")}

const functionArray = [a, b, c]

for(const item of functionArray) {

    item()
}




//Create a function as a const and try creating a function normally. Call both functions:

//x() causes error

//Function Expression(Anonymous): Loaded only when the interpreter reaches this line of code
const x = function() { console.log("This function was defined as a variable") }

y()

//Function Declaration: Loaded before any code is executed
function y()
{
    console.log ("This function was defined normally")
}

x()
y()




//Create an object that has a key whose value is a function. Try calling this function:

const student = {name: "Tina", lastName: "Jensen", age: 20, eyeColor: "blue", 
fullName: function() { console.log(this.name + " " + this.lastName)}
}

student.fullName()
