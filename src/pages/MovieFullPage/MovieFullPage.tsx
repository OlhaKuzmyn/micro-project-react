import React, {FC, useEffect, useState} from 'react';
import {MovieFull} from "../../components";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";
import {IMovieFull} from "../../interfaces";

const MovieFullPage: FC = () => {
    const [movie, setMovie] = useState<IMovieFull | null>(null);
    const {id} = useParams();

    useEffect(()=>{
        movieService.getMovie(id!).then(({data}) => setMovie(data))
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