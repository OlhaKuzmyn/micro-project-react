import React, {FC} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {Search, SearchForm} from "../../components";
import {useAppSelector} from "../../hooks";
import {IQuery} from "../../interfaces";
import {pageValidator} from "../../validators";

import css from "./SearchPage.module.css";

const SearchPage: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onTouched",
        resolver: joiResolver(pageValidator)
    })

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const {totalPages, noResults} = useAppSelector(state => state.movieReducer)

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
            {/*{!noResults &&*/}
            {/*    <div>*/}
                    {query &&
                    <div className={css.pages}>
                        <Link to={{search: `query=${query}&page=${pageNum-1}`}} >
                            <button className={css.btnPage} disabled={pageNum === 1}>Previous</button>
                        </Link>
                        <div>
                            <form className={css.form} onSubmit={handleSubmit(pageSelect)}>
                                <div><label>Enter Page number: <input type="number" {...register('page')} className={css.input}/></label></div>
                                {errors.page && <span>{errors.page.message}</span>}
                                <button className={css.btnPage}>Go to page</button>
                            </form>
                        </div>
                        <Link to={{search: `query=${query}&page=${pageNum+1}`}} >
                            <button className={css.btnPage} disabled={pageNum === totalPages}>Next</button>
                        </Link>
                    </div>
                    }
            {/*    </div>*/}
            {/*}*/}
        </div>
    );
};

export {SearchPage};