const moviesDB = []
let id = 1;

const findAllMovies = async () => { 
    return await moviesDB
}

// Estructura de la pelicula 
// {
// 	"id" :1,
// 	"title": "Pacific Rim",
//   "description": "Lorem Ipsum",
//   "year": 2012,
//   "director": "Guillermo del Toro"
// }

const createNewMovie = async (obj) => {
    const newMovie = {
        "id" : id++,
        "title": obj.title,
        "description": obj.description,
        "year": obj.year,
        "director": obj.director
    }

    await moviesDB.push(newMovie)
    return newMovie;
}

const findMovieByID = async (id) => {
    const findMovie = await moviesDB.find(movie => movie.id === id)
    return findMovie
}

module.exports = {
    findAllMovies,
    findMovieByID,
    createNewMovie
}