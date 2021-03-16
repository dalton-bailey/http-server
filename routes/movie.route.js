import { Router } from 'express'

export const movieRouter = Router()

// import { postAddMovie, getMovies, getMovieById, putEditMovie, deleteMovie } from '../controllers/movie.controller.js'
import { postAddMovie } from '../controllers/movie.controller.js'

movieRouter.post('/', postAddMovie)

// movieRouter.get('/async', getMovies)

// movieRouter.get('/id', getMovieById)

// movieRouter.put('/update', putEditMovie)

// movieRouter.delete('/delete', deleteMovie)