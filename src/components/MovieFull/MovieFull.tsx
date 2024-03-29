import React, {FC} from 'react';

import {IMovieFull} from "../../interfaces";
import {imgUrls} from "../../constants";

import css from "./MovieFull.module.css"

interface IProps {
    movie: IMovieFull
}

const MovieFull: FC<IProps> = ({movie}) => {
    return (
        <div>
            {
                movie && <div>
                    <div style={{
                        backgroundImage: `url(${imgUrls.picOG}${movie.poster_path})`
                    }} className={css.bgimg}>
                    </div>
                        <div className={css.bgtext}>
                            <img src={`${imgUrls.picW500}${movie.poster_path}`} alt={movie.original_title}/>
                            <h1>{movie.original_title}</h1>
                            <p>{movie.overview}</p>
                            <div className={css.innertxt}>
                                {movie.adult && <p>PG: Movie is for adult audience only</p>}
                                {!movie.adult && <p>PG: Movie is for everyone</p>}
                                <p>Budget: {movie.budget}</p>
                                <ul>Genres:
                                    {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                                </ul>
                                <p>Homepage: <a href={movie.homepage} className={css.link}>{movie.homepage}</a></p>
                                <p>Language: {movie.original_language}</p>
                                <p>Vote Average: {movie.vote_average}, with {movie.vote_count} people voted</p>
                            </div>
                        </div>
                </div>
            }
        </div>
    );
};

export {MovieFull};