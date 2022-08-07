import React, {FC} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Search, SearchForm} from "../../components";
import css from "./SearchMovie.module.css";
import {useAppSelector} from "../../hooks";
import {IQuery} from "../../interfaces";
import {useForm} from "react-hook-form";

const SearchPage: FC = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({mode: "onTouched"})

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const {totalPages} = useAppSelector(state => state.movieReducer)

    let pageNum = searchParams.get('page') ? +searchParams.get('page')! : 1

    let query = searchParams.get('query')

    const navigate = useNavigate()

    const pageSelect = (pageNum: IQuery) => {
        navigate(`?query=${query}&page=${pageNum.page}`)

    }

    return (
        <div>
            <div>
                <SearchForm/>
                <Search/>
            </div>
            <div className={css.pages}>
                <Link to={{search: `query=${query}&page=${pageNum-1}`}} >
                    <button className={css.btnPage} disabled={pageNum === 1 || !query}>Previous</button>
                </Link>
                <div>
                    <form className={css.form} onSubmit={handleSubmit(pageSelect)}>
                        <div><label>Enter Page number: <input type="number" {...register('page')} className={css.input}/></label></div>
                        <button className={css.btnPage}>Go to page</button>
                    </form>
                </div>
                <Link to={{search: `query=${query}&page=${pageNum+1}`}} >
                    <button className={css.btnPage} disabled={pageNum === totalPages || !query}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export {SearchPage};