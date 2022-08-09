import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {IQuery} from "../../interfaces";
import {searchValidator} from "../../validators";

import css from "./SearchForm.module.css"

const SearchForm: FC = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({mode: "onTouched",
        resolver: joiResolver(searchValidator)
    })

    const navigate = useNavigate()

    const search = (query: IQuery) => {
        navigate(`?query=${query.query}`)
        reset()
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