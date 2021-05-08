import { NextApiRequest, NextApiResponse } from 'next'
// import Axios from '../../utils/axios'
import axios from 'axios'

type Response = {
  data?: any
  error?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  try {
    const { search, type } = req.query

    // const { data } = await axios.get(`http://www.omdbapi.com/?apikey=86e3d1f1&type=${type}&s=${search}&page=${1}`)

    // console.log(data)

    const data = {
      Response: true,
      Search: [
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          Title: "Batman Begins",
          Type: "movie",
          Year: "2005",
          imdbID: "tt0372784",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          Title: "Batman v Superman: Dawn of Justice",
          Type: "movie",
          Year: "2016",
          imdbID: "tt2975590",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
          Title: "Batman",
          Type: "movie",
          Year: "1989",
          imdbID: "tt0096895",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
          Title: "Batman Returns",
          Type: "movie",
          Year: "1992",
          imdbID: "tt0103776",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          Title: "Batman Forever",
          Type: "movie",
          Year: "1995",
          imdbID: "tt0112462",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
          Title: "Batman & Robin",
          Type: "movie",
          Year: "1997",
          imdbID: "tt0118688",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
          Title: "The Lego Batman Movie",
          Type: "movie",
          Year: "2017",
          imdbID: "tt4116284",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
          Title: "Batman: Under the Red Hood",
          Type: "movie",
          Year: "2010",
          imdbID: "tt1569923",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
          Title: "Batman: The Dark Knight Returns, Part 1",
          Type: "movie",
          Year: "2012",
          imdbID: "tt2313197",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
          Title: "Batman: The Killing Joke",
          Type: "movie",
          Year: "2016",
          imdbID: "tt4853102",
        }
      ],
      totalResults: '347'
    }
  
    res.status(200).json({
      data,
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
  
}
