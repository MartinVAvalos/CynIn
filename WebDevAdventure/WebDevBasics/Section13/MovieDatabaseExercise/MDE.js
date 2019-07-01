var movies = [
    {
        title: "Sonic The Hedgehog",
        rating: 1.0,
        hasWatched: true
    },
    {
        title: "Bee Movie",
        rating: 0.0,
        hasWatched: false
    },
    {
        title: "Aladin",
        rating: 4.6,
        hasWatched: true
    }
]

function printMovies() {
    movies.forEach(movie => {
        var result = "You have ";
        if(movie.hasWatched === true) {
            result += "watched ";
        }
        else {
            result += "not seen "
        }
        result += "\"" + movie.title + "\" - ";
        result += movie.rating + " stars";
        console.log(result);
    });
}