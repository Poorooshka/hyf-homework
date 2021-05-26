
const btn = document.getElementById("get_meal")


btn.addEventListener("click", () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')  			//'url of the api'
.then((response) =>response.json())
.then((response)=> {
    //console.log(response) shows that the api returns each time a random mean in the form an array including one object meals[0]
    console.log(response.meals[0])
    const mealObj = response.meals[0]
    const h2 = document.createElement("h2")
    h2.innerText = mealObj.strMeal
    document.body.appendChild (h2)
 })
})



