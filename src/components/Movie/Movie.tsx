import React, {FC} from 'react';

import {imgUrls} from "../../constants";
import {IMovie} from "../../interfaces";

import css from "./Movie.module.css"

interface IProps {
    movie: IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    return (
        <div>
            <div className={css.movieContainer}>
                <img src={`${imgUrls.picW500}${movie.poster_path}`} alt={movie.original_title} className={css.poster}/>
                <p className={css.title}>{movie.original_title}</p>
            </div>
        </div>
    );
};

export {Movie};