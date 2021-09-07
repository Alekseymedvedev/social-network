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
                        <NavLink to="/messages" activeClassName={classes.active}>Сообщения</NavLink>
                    </li>
                    <li className={classes.list}>
                        <NavLink to="/ffff" activeClassName={classes.active}>Новости</NavLink>
                    </li>
                    <li className={classes.list}>
                        <NavLink to="/messages" activeClassName={classes.active}>настройка</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
