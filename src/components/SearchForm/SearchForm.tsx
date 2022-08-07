import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {IQuery} from "../../interfaces";

import css from "./SearchForm.module.css"

const SearchForm: FC = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({mode: "onTouched"})
    const navigate = useNavigate()

    const search = (query: IQuery) => {
        navigate(`?query=${query.query}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)} className={css.form}>
                <div><label>Search: <input type="text" {...register('query')} className={css.input} /></label></div>
                <button className={css.btn}>Search</button>
            </form>

        </div>
    );
};

export {SearchForm};