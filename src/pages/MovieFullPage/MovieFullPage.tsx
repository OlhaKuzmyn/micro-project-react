import React, {FC, useEffect, useState} from 'react';
import {MovieFull} from "../../components";
import {useLocation, useParams} from "react-router-dom";
import {movieService} from "../../services";
import {IMovie, IMovieFull} from "../../interfaces";

const MovieFullPage: FC = () => {
    const [movie, setMovie] = useState<IMovie>({id: 0, original_title: '', poster_path: ''});
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(()=>{
        if (state) {
            setMovie(state as IMovie);
        } else {
            movieService.getMovie(id!).then(({data}) => setMovie(data))
        }
    }, [])

    return (
        <div>
            {
                movie && <MovieFull movie={movie as IMovieFull}/>
            }
        </div>
    );
};

export {MovieFullPage};