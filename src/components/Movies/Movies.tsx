import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector, useQueryParams} from "../../hooks";
import {movieActions} from "../../redux";
import {Link, useLocation} from "react-router-dom";


const Movies: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const queryParams = useQueryParams()
    // console.log("qp", queryParams);

    const location = useLocation()
    // console.log(location);

    const searchParams = new URLSearchParams(location.search)

    let pageNum = searchParams.get('page') ? +searchParams.get('page')! : 1

    let withGenres = searchParams.get('with_genres')? searchParams.get('with_genres')! : undefined

    useEffect(()=>{
        dispatch(movieActions.getPage(queryParams))
    },[dispatch, location])

    // const nextPage = () => {
    //     searchParams.set('page', '2')
    //     console.log(searchParams.get('page'));
    //     console.log('nxt')
    // }

    return (
        <div>
            {movies.map(movie=><div>{movie.original_title}</div>)}
            {/*<button onClick={nextPage}>Next</button>*/}
            <Link to={{search: `page=${pageNum!+=1}${withGenres ? `&with_genres=${withGenres}` : ''}`}} >
                <button>Next</button>
            </Link>
        </div>
    );
};

export {Movies};