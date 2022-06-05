import {axiosService, Res} from "./axios.service";
import {IPage} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getPage: ():Res<IPage> => axiosService.get(urls.moviesPage)

}

export {
    movieService
}