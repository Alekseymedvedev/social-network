import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes.inner}>
                    <div className={classes.logo}>Ясоцсеть</div>
                    <div className={classes.nav}>
                        <ul>
                            <li className='list'>
                                <a href='#'>Поиск</a>
                            </li>
                            <li className='list'>
                                <a href='#'>Музыка</a>
                            </li>
                            <li className='list'>
                                <a href='#'>Группы</a>
                            </li>
                            <li className='list'>
                                <a href='#'>Выйти</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
