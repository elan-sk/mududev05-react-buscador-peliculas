const API_KEY = '10c08b2'
const API_ID = 'tt3896198'

export const searchMovies = async ({ search, sort }) => {
  if (search === '' ) return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${API_ID}&apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch(e){
    throw new Error('Error searching movies')
  }
}
 