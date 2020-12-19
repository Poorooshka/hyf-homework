
let count_l = 0
let count_s = 0

const button_element = document.getElementById("start")

function timeOver() {
    const input_element = document.getElementById("time")
    time = input_element.value
    if(time ==="")
        {console.log("Please Enter a valid number as the duration of the game in seconds")}
    else{
        setTimeout(timeOverCallback, time*1000)
    }
 }


    function timeOverCallback() {
        console.log("Time is over")
        if(count_l>count_s)
            {
                console.log("User L is the Winner")
            }
        else if(count_s>count_l)
            {
                console.log("User S is the Winner")
            }
        else {
                console.log("This was a draw")
            }

    }


button_element.addEventListener("click", timeOver)

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; }// Do nothing if the event was already processed
    
    switch(event.key) {
        case "l": count_l++
        break;

        case "s": count_s++
        break;}
    })


    
    