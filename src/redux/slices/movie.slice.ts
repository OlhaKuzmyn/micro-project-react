import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IPage} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies:IMovie[],
    page: IPage
}

const initialState:IState = {
    movies: [],
    page: {results: [], page: 0, total_results: 0, total_pages: 0}
}

const getPage = createAsyncThunk<IPage,void>(
    'movieSlice/getAll',
    async () => {
        const {data} = await movieService.getPage();
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