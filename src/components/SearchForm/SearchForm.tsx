import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {IQuery} from "../../interfaces";
import {searchValidator} from "../../validators";

import css from "./SearchForm.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const SearchForm: FC = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({mode: "onTouched",
        resolver: joiResolver(searchValidator)
    })

    // const {searchmovies} = useAppSelector(state => state.movieReducer);
    // const dispatch = useAppDispatch();

    const navigate = useNavigate()

    const search = (query: IQuery) => {
        navigate(`?query=${query.query}`)
        reset()
        // if (searchmovies.length === 0) {
        //     dispatch(movieActions.setNoResults({noResults: true}))
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)} className={css.form}>
                <div><label>Search: <input type="text" {...register('query')} className={css.input} /></label></div>
                {errors.query && <span>{errors.query.message}</span>}
                <button className={css.btn} disabled={!!errors.query}>Search</button>
            </form>

        </div>
    );
};

export {SearchForm};