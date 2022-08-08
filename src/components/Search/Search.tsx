import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector, useQueryParams} from "../../hooks";
import {movieActions} from "../../redux";
import {SearchMovie} from "../SearchMovie/SearchMovie";

import css from "./Search.module.css"

const Search: FC = () => {

    const {searchmovies, noResults} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    // console.log(noResults);

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const queryParams = useQueryParams()


    useEffect(()=>{
        if (searchParams.get('query')) {
            dispatch(movieActions.getSearchMovies(queryParams))
            // if (searchmovies.length !== 0) {
            //     dispatch(movieActions.setNoResults({noResults: false}))
            // }
        }
    },[dispatch, location])

    return (
        // <div>
        //     {noResults ?
        //         <h2 className={css.noResults}>No Results</h2>
        //         :
        //         <div className={css.container}>
        //             {searchmovies.map(movie => <SearchMovie key={movie.id} movie={movie}/>)}
        //         </div>
        //     }
        // </div>
        <div className={css.container}>
            {searchmovies.map(movie => <SearchMovie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Search};