import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector, useQueryParams} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

import css from "./Movies.module.css"

const Movies: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const queryParams = useQueryParams()

    const location = useLocation()

    useEffect(()=>{
        dispatch(movieActions.getMovies(queryParams))
    },[dispatch, location])

    return (
        <div className={css.container}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};