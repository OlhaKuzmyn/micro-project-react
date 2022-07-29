import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {useQuery} from "../../hooks/query";
import {IQuery} from "../../interfaces";

const Movies: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const query = useQuery()
    console.log(query.get('page'));
    useEffect(()=>{
        // @ts-ignore
        dispatch(movieActions.getPage(query))
    },[dispatch])
    return (
        <div>
            {movies.map(movie=><div>{movie.original_title}</div>)}
        </div>
    );
};

export {Movies};