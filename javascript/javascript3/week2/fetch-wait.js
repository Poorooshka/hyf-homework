// Promise Way

setTimeout(() => {
    fetch("https://yesno.wtf/api")
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('failure'))
} , 3000)


// Async-Await Way

async function getYesNo() {
    const response = await fetch("https://yesno.wtf/api")
    try {
        const data = await response.json()
        console.log(data)
    }
    catch(err) {
        console.log('failure')
    }
    
}

setTimeout(getYesNo(), 3000)

// I prefer Promise Way because the other method was followed by this error: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'strict-dynamic'