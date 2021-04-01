 //exercise 1
 function logOutFunction()
 {
   document.getElementById("text").innerHTML = "Called after 2.5 seconds"

 }
 window.addEventListener('load', (event)=>setTimeout(logOutFunction, 2500))



// exercise 2
function stringLogOut(delay, stringToLog)
{
setTimeout(()=>console.log(`${stringToLog}`), delay*1000)

}

stringLogOut(5, "This script is logged after 5 seconds")
stringLogOut(3, "This script is logged after 3 seconds")



//exercise 3: 

button_element = document.getElementById("log_button")
button_element.addEventListener('click', () => {
stringLogOut(5, "called after 5 seconds")})



//exercise 4: Planet Logger

const earthLogger = function() {console.log("Earth")}
const saturnLogger = function() {console.log("Saturn")}

const planetLogFunction = function(callback) { callback() }

planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)



//exercise 5: Geographical Location

const status = document.getElementById("status")

function getLocation() {
if(navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showPosition)
}
else {
 status.innerHTML="Geolocation is not supported by this browser."
}
}

function showPosition(position){
status.innerHTML= "Latitude: " + position.coords.latitude + "<br> Longitude: "+ position.coords.longitude

}

document.getElementById("geo_button").addEventListener('click', getLocation)



//exercise7: Run after Delay

function runAfterDelay(delay, callback) {
setTimeout(callback, delay*1000)
}

runAfterDelay(4, function() { console.log('Should be logged after 4 seconds')})



//exercise 8: Double Click

window.addEventListener('dblclick', ()=>{ console.log('double clicked')})



// exercise 9: Joke Creator

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {

if(shouldTellFunnyJoke) {
 logFunnyJoke()
}
else {
 logBadJoke()
}
}

function logFunnyJoke() {
console.log ('good joke')
}

function logBadJoke() {
console.log('bad joke')
}

jokeCreator(true,logFunnyJoke, logBadJoke);
jokeCreator(false,logFunnyJoke, logBadJoke);