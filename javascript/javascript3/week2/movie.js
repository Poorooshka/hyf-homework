const url = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
fetch(url)
    .then(response=>response.json())
    .then(movieData=>{
        const badMovies = movieData.filter(movie=>movie.rating < 5);
        const badMoviesAfter2000 = badMovies.filter(movie=>movie.year > 2000)
        console.log(badMovies)
        console.log(badMoviesAfter2000)
    })

