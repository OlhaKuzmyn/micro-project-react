import React, {FC} from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {GenreList} from "../../components";

const Header :FC = () => {
    const theme = () => {
        document.body.classList.toggle('light-theme')
    }

    return (
        <div>
            <div className={css.menu}>
                <div>
                    <NavLink className={css.menulink} to={'/movies'}>Movies</NavLink>
                </div>
                <div>
                    <NavLink className={css.menulink} to={'/search'}>Search</NavLink>
                </div>
                <div className={css.rightside}>
                    <button className={css.themebtn} onClick={theme}>Theme</button>
                    <div className={css.userBox}>
                        <p className={css.username}>User</p>
                    </div>
                </div>
            </div>
            <GenreList/>
        </div>
    )
};

export {Header};