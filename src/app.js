// Se importan dependencias
const express = require('express')

// Se importan los routers
const movieRouter = require("./movies/movies.router")

// Config initial
const port = 9000
const app = express()

// JSON 
app.use(express.json())

// Servidor listo
app.get("/", (req, res) => {
    res.status(200).json({message: "Ready!"})
})

app.use('/api/v1', movieRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)   
})