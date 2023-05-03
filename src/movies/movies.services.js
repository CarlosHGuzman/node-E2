const moviesControllers = require("./movies.controllers")

const getAllMovies = (req, res) => {
    moviesControllers.findAllMovies()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error => {
            res.status(400).json({message: 'Bad request', error})
        })
}

const createNewMovie = (req, res) => {
    const infoMovie = req.body
    moviesControllers.createNewMovie(infoMovie)
        .then( data => {
            if(infoMovie){
                res.status(201).json(data)   
            } else {
                res.status(400).json({
                    message: "Invalid Data",
                    fields: {
                        "title": "String",
                        "description": "String",
                        "year": "int",
                        "director": "String"
                    }
                })
            }
        })
        .catch(error => {
            res.status(400).json({message: 'Bad request', err})
        })
 
}

// Retorna la pelicula dependiendo del id

const getMovieById = (req, res) => {
    const id = Number(req.params.id)
    moviesControllers.findMovieByID(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({ message: `Not found movie with id ${id}`})
            }
        })
        .catch(error => {
            res.status(400).json({message: 'Bad request', error})
        })
}

module.exports = {
    getAllMovies,
    createNewMovie,
    getMovieById
}   