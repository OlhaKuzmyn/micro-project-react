import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IGenre, IGenresList, IMovie, IPage, IQuery} from "../../interfaces";

interface IState {
    movies:IMovie[],
    searchmovies:IMovie[],
    totalPages: number,
    genreList: IGenre[],
    noResults: boolean
}

const initialState:IState = {
    movies: [],
    searchmovies:[],
    totalPages: 1,
    genreList: [],
    noResults: false
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
        setNoResults: (state, action) => {
            state.noResults = action.payload.noResults
        }
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

const {reducer: movieReducer, actions: {setNoResults}} = movieSlice

const movieActions = {
    getMovies,
    getSearchMovies,
    getGenreList,
    setNoResults
}

export {
    movieReducer,
    movieActions

}