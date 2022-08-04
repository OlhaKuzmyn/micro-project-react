import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector, useQueryParams} from "../../hooks";
import {movieActions} from "../../redux";
import {useLocation} from "react-router-dom";
import {Movie} from "../Movie/Movie";

import css from "./Movies.module.css"

const Movies: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const queryParams = useQueryParams()
    // console.log("qp", queryParams);

    const location = useLocation()
    // console.log(location);

    useEffect(()=>{
        dispatch(movieActions.getPage(queryParams))
    },[dispatch, location])

    // const nextPage = () => {
    //     searchParams.set('page', '2')
    //     console.log(searchParams.get('page'));
    //     console.log('nxt')
    // }

    return (
        <div className={css.container}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            {/*<button onClick={nextPage}>Next</button>*/}
        </div>
    );
};

export {Movies};