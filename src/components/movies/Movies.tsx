import React, {FC, useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {useQuery, useQueryParams} from "../../hooks/query";


const Movies: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    // const query = useQuery()
    const queryParams = useQueryParams()
    // const queryParams = useMemo(() => useQueryParams(query), [query])
    console.log("qp", queryParams);

    useEffect(()=>{
        dispatch(movieActions.getPage(queryParams))
    },[dispatch //, queryParams - creates loop
    ])
    return (
        <div>
            {movies.map(movie=><div>{movie.original_title}</div>)}
        </div>
    );
};

export {Movies};