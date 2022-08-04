import React, {FC} from 'react';

import css from './Header.module.css'

const Header :FC = () => {
    const theme = () => {
        document.body.classList.toggle('light-theme')
    }

    return (
        <div>
        <button className={css.themebtn} onClick={theme}>Theme</button>
        </div>
    )
};

export default Header;