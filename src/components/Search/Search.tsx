import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector, useQueryParams} from "../../hooks";
import {useLocation} from "react-router-dom";
import {movieActions} from "../../redux";
import {SearchMovie} from "../SearchMovie/SearchMovie";

import css from "./Search.module.css"

const Search: FC = () => {

    const {searchmovies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const queryParams = useQueryParams()


    useEffect(()=>{
        if (searchParams.get('query')) {
            dispatch(movieActions.getSearchMovies(queryParams))
        }
    },[dispatch, location])

    return (
        <div className={css.container}>
            {searchmovies.map(movie=><SearchMovie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Search};