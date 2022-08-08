import React, {FC} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {Movies} from "../../components";
import {IQuery} from "../../interfaces";
import {pageValidator} from "../../validators";

import css from "./MoviesPage.module.css"

const MoviesPage: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onTouched",
        resolver: joiResolver(pageValidator)
    })

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    let pageNum = searchParams.get('page') ? +searchParams.get('page')! : 1

    let withGenres = searchParams.get('with_genres')? searchParams.get('with_genres')! : undefined

    const navigate = useNavigate()

    const pageSelect = (pageNum: IQuery) => {
        navigate(`?page=${pageNum.page}`)

    }

    return (
        <div>
            <div>
                <Movies/>
            </div>
            <div className={css.pages}>
                <Link to={{search: `page=${pageNum-1}${withGenres ? `&with_genres=${withGenres}` : ''}`}} >
                    <button className={css.btnPage} disabled={pageNum === 1}>Previous</button>
                </Link>
                <div>
                    <form className={css.form} onSubmit={handleSubmit(pageSelect)}>
                        <div><label>Enter Page number: <input type="number" {...register('page')} className={css.input}/></label></div>
                        {errors.page && <span>{errors.page.message}</span>}
                        <button className={css.btnPage}>Go to page</button>
                    </form>
                </div>
                <Link to={{search: `page=${pageNum+1}${withGenres ? `&with_genres=${withGenres}` : ''}`}} >
                    <button className={css.btnPage} disabled={pageNum === 500}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export {MoviesPage};