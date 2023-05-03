const router = require('express').Router()

const moviesServices = require("./movies.services")

// Agregando las rutas bases
router.get('/movies', moviesServices.getAllMovies)
router.post("/movies", moviesServices.createNewMovie)

//Agregando la ruta de filtro
router.get('/movies/:id', moviesServices.getMovieById)

module.exports = router