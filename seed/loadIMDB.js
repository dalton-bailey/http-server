import axios from "axios"
import { Movie } from '../models/movie.js'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const seedMongo = async () => {
  await mongoose.connect(`${process.env.DGM4790_CONNECTION_STRING}`,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
})

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'Hulk'},
  headers: {
    'x-rapidapi-key': `${process.env.RAPIDAPI_KEY}`,
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
}
  
  try {
    const response = await axios.request(options)
    await addMovies(response.data.d)
    await mongoose.connection.close() 
  } catch (error) {
    console.error(error)
  }
  
}

const addMovie = async (oneMovie) => {
    const movie = new Movie({
        title: oneMovie.l,
        rank: oneMovie.rank,
        image: oneMovie.i,
        id: oneMovie.id,
        year: oneMovie.y
    })
    await movie.save() 
    console.log('Added successfuly')
}

const addMovies = async (movieList) => {
  for (let movie of movieList) {
    await addMovie(movie)
  }
}

seedMongo()