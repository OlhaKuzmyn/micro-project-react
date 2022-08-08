import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenresList, IMovie, IPage} from "../../interfaces";
import {movieService} from "../../services";
import {IQuery} from "../../interfaces";

interface IState {
    movies:IMovie[],
    searchmovies:IMovie[],
    totalPages: number,
    genreList: IGenre[],
}

const initialState:IState = {
    movies: [],
    searchmovies:[],
    totalPages: 1,
    genreList: []
}

const getMovies = createAsyncThunk<IPage, IQuery>(
    'movieSlice/getMovies',
    async (params) => {
        const {data} = await movieService.getMovies(params);
        return data
    }
)

const getSearchMovies = createAsyncThunk<IPage,IQuery> (
    'movieSlice/getSearchMovies',
    async (params) => {
        const {data} = await movieService.getSearchMovies(params)
        return data
    }
)

const getGenreList = createAsyncThunk<IGenresList, void>(
    'movieSlice/getGenreList',
    async () => {
        const {data} = await movieService.getGenreList()
        return data
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled,(state, action)=> {
                state.movies = action.payload.results
            })

            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.searchmovies = action.payload.results;
                state.totalPages = action.payload.total_pages
            })

            .addCase(getGenreList.fulfilled, (state, action)=>{
                state.genreList = action.payload.genres
            })
    }
})

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getMovies,
    getSearchMovies,
    getGenreList
}

export {
    movieReducer,
    movieActions

}