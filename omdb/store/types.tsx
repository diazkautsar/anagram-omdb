export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
export const UPDATE_LIST = 'UPDATE_LIST'
export const UPDATE_DETAIL = 'UPDATE_DETAIL'

export type list = {
  Poster?: string
  Title?: string
  Type?: string
  Year: string
  imdbID?: string
}

interface Ratings {
  Source?: string
  Value?: string
}

export type Detail = {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: Ratings[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}