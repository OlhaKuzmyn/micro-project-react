import {axiosService, Res} from "./axios.service";

import {IGenresList, IMovieFull, IPage, IQuery} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getMovies: (params: IQuery):Res<IPage> => axiosService.get(urls.movies, {params: params}),
    getMovie: (id:string):Res<IMovieFull> => axiosService.get(`${urls.movieDetails}/${id}`),
    getGenreList: (): Res<IGenresList> => axiosService.get(urls.genreList),
    getSearchMovies: (params: IQuery):Res<IPage> => axiosService.get(urls.search, {params: params}),


}

export {
    movieService
}