
        const dogYearOfBirth = 2020;
        const dogYearFuture = 2030;
        const dogYear = dogYearFuture - dogYearOfBirth;
        let shouldShowResultInDogYears = true;

        if (shouldShowResultInDogYears)
        {
            const dogAge = dogYear*7;
            console.log("Your dog will be " + dogAge + "dog years old in " + dogYearFuture)
        }
        else{
            const dogAge = dogYear;
            console.log("Your dog will be " + dogAge + "human years old in " + dogYearFuture)
            
        }

        