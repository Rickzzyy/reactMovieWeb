const API_KEY = 'e7b87e00c01d330b5451f42e9752b8fc'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
	const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
	const data = await response.json()
	return data.results
}
export const searchMovies = async (query) => {
	const response = await fetch(`${BASE_URL}/query/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
	const data = await response.json()
	return data.results
}
