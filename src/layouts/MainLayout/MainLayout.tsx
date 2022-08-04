import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
import {Header} from "../../app-components";

const MainLayout : FC = () => {
    return (
        <div className={css.container}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};