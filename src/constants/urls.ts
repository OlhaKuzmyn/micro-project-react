const baseURL = process.env.REACT_APP_API;

const urls = {
    moviesPage: '/discover/movie?page=1',
    // moviesPage: '/discover/movie',
    genreList: '/genre/movie/list',
    search: '/search/movie',
    movieDetails: '/movie'
    // picW500: /w500,
    // picOG: ${pic}/original
}


export {
    baseURL,
    urls
}