import React, {FC} from 'react';
import {Movies} from "../../components";
import {Link, useLocation} from "react-router-dom";

import css from "./MoviesPage.module.css"

const MoviesPage: FC = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    let pageNum = searchParams.get('page') ? +searchParams.get('page')! : 1

    let withGenres = searchParams.get('with_genres')? searchParams.get('with_genres')! : undefined

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
                    <form className={css.form}>
                        <div><label>Enter Page number: <input type="number" className={css.input}/></label></div>
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