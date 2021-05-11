import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Response = {
  data?: any
  error?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  try {
    const { id } = req.query

    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}&plot=full`)

    res.status(200).json({
      data: data.Poster
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}