import React from 'react';
import classes from "./Sidebar.module.css";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav>
                <ul>
                    <li className={classes.list}>
                        <NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
                    </li>
                    <li className={classes.list}>
                        <NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink>
                    </li>
                    <li className={classes.list}>
                        <NavLink to="/news" activeClassName={classes.active}>Новости</NavLink>
                    </li>
                    <li className={classes.list}>
                        <NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
