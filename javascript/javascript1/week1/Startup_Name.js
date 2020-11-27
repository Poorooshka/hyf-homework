
        const firstWords = ["Awesome", "Creative", "fantastic", "international", "Marvelous", "Integrated", "Corporal", "amazing"];
        const secondWords = ["Starter", "firm",  "Corporation", " Organization", " Start-up", " Company", " Business", "association"];

        const randomNumber = Math.floor(Math.random() * 10);
        
        cost startupName = firstWords[randomNumber] +  secondWords[randomNumber];

        console.log("The startup: " + "'" + startupName + "'" + "contains " + startupName.length + " characters.");
