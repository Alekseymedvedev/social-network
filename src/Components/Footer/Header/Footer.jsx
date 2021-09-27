
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes.inner}>
                    <div className={classes.logo}>
                        <NavLink to='/'>Ясоцсеть</NavLink>
                    </div>
                    <form className={classes.form}>
                        <label className={classes.label}>
                            <input type='search' placeholder="Поиск" />
                        </label>
                    </form>
                    <div className={classes.cabinet}>
                        <img src="https://s1.1zoom.ru/big3/777/Big_cats_Snow_leopards_476037.jpg" alt="" />
                        <NavLink className="link" to="cabinet">Алексей</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
