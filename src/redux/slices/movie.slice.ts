import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IPage} from "../../interfaces";
import {movieService} from "../../services";
import {IQuery} from "../../interfaces";
import {IParams} from "../../interfaces";

interface IState {
    movies:IMovie[],
    page: IPage,
    params: IQuery
}

const initialState:IState = {
    movies: [],
    page: {results: [], page: 0, total_results: 0, total_pages: 0},
    params: {}
}

const getPage = createAsyncThunk<IPage, IQuery>(
    'movieSlice/getAll',
    async (params) => {
        const {data} = await movieService.getPage(params);
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
            .addCase(getPage.fulfilled,(state, action)=> {
                state.page = action.payload;
                state.movies = action.payload.results
            })
    }
})

const {reducer: movieReducer} =movieSlice

const movieActions = {
    getPage
}

export {
    movieReducer,
    movieActions

}