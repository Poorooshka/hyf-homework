

            function evaluateHousePrice (name, width, height, depth, gardenSize, houseCost) 
            {


                volumeInMeters = width*height*depth;

                const housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSize * 300);

                if (houseCost > housePrice)
                {
                    console.log(name + " is paying too much for the house.")
                }
                else{
                    console.log(name + " is paying a fair price for the house")
                }
            }


            evaluateHousePrice("Peter", 8, 10, 10, 100, 2500000);
            evaluateHousePrice("Julia", 5, 8, 11, 70, 1000000);

