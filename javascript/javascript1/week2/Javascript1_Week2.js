

// Get Full Name

function getFullName(firstName, surName) {

    let fullName = firstName + ' ' + surName;
    return fullName;
}

const customer1 = getFullName('Benjamin', 'Huges');
console.log(customer1)

const customer2 = getFullName('Ida', 'Naderian');
console.log(customer2)





//Use Formal Name

function getFullname(firstName, surName, useFormalName) {

    let fullName;
    if(useFormalName) {
        fullName = 'Lord ' + firstName + ' ' + surName;
    }
    else {
        fullName = firstName + ' ' + surName;

    }

return fullName;

}





// Event Calender

function getEventWeekday(numberOfDays) {

    let today = new Date();
    const dayOfWeek = today.getDay();
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const FutureDayOfWeek = (dayOfWeek + numberOfDays) % 7
    console.log (daysOfTheWeek[FutureDayOfWeek])
}

getEventWeekday(7);
getEventWeekday(8);
getEventWeekday(14);
getEventWeekday(142);





// Weather Wear


function whatToWear(temperature) {

    if (temperature < 5) {

        return "heavy coat, shawl and gloves";
    }
    else if (temperature < 14) {
        return "light coat";
    }
    else if (temperature < 18) {
        return "jacket and shirt";
    }
    else {
        return "T-shirt and shorts";
    }

}

const clothesToWear = whatToWear(18);
console.log(clothesToWear);





// Student Names

const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("You must enter a valid name")
    }
    else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class.")
    }
    else if (class07Students.length < 6) {
        class07Students.push(studentName);
    } 
    else if (studentName !== "Margrethe II") {
        console.log("can not add more students in class 07")
    } 
    else {
        class07Students.push(studentName);
    }
}


addStudentToClass("Peter");
addStudentToClass("mads");
addStudentToClass("Tina");
addStudentToClass("nina");
addStudentToClass("Martin");
addStudentToClass("Nashmil");

addStudentToClass("max");
addStudentToClass("Peter");
addStudentToClass("");
addStudentToClass("Margrethe II");
addStudentToClass("Margrethe II");

