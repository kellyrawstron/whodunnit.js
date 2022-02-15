var movie = {
    title: "It's a wonderful life",
    year: 1946,
    language: "Spanish"
};

movie.cast = ["James Streart", "Donna Reed"]
movie.language = "English"
movie['subtitle-language'] = "German"

// console.log(movie["title"]);
// console.log(movie.title);
// delete movie.year

movie.ratings = {
    audience: 94,
    critits: 95
}

for(var key in movie) {
    console.log(key);
}

var keys = Object.keys(movie)
console.log(keys);

// console.log(movie);

