import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../app-components";

import css from './MainLayout.module.css'

const MainLayout : FC = () => {
    return (
        <div className={css.container}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};