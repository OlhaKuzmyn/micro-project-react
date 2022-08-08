import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {NavLink} from "react-router-dom";

import css from "./GenreList.module.css"

const GenreList: FC = () => {

    const {genreList} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(movieActions.getGenreList())
    }, [dispatch])

    return (
        <div className={css.genreBox}>
            {genreList.map(genre=><NavLink key={genre.id} to={`/movies?with_genres=${genre.id}`} className={css.genrename} >{genre.name}</NavLink>)}
        </div>
    );
};

export {GenreList};