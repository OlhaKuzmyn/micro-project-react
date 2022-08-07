const baseURL = process.env.REACT_APP_API;

const urls = {
    movies: '/discover/movie',
    genreList: '/genre/movie/list',
    search: '/search/movie',
    movieDetails: '/movie',
}


export {
    baseURL,
    urls
}