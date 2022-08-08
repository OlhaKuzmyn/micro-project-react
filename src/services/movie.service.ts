import {axiosService, Res} from "./axios.service";
import {IGenresList, IMovie, IPage} from "../interfaces";
import {urls} from "../constants";
import {IQuery} from "../interfaces";

const movieService = {
    getMovies: (params: IQuery):Res<IPage> => axiosService.get(urls.movies, {params: params}),
    getMovie: (id:string):Res<IMovie> => axiosService.get(`${urls.movieDetails}/${id}`),
    getGenreList: (): Res<IGenresList> => axiosService.get(urls.genreList),
    getSearchMovies: (params: IQuery):Res<IPage> => axiosService.get(urls.search, {params: params}),


}

export {
    movieService
}