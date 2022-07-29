import {axiosService, Res} from "./axios.service";
import {IGenre, IMovie, IPage} from "../interfaces";
import {urls} from "../constants";
import {IQuery} from "../interfaces";

const movieService = {
    getPage: (params: IQuery):Res<IPage> => axiosService.get(urls.moviesPage, {params: params}),
    getMovie: (id:number):Res<IMovie> => axiosService.get(`${urls.movieDetails}/${id}`),
    // getGenreList: (): Res<IGenre[]>

}

export {
    movieService
}