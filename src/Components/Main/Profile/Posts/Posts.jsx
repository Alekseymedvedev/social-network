import classes from "./Posts.module.css";


const Posts = () => {
    return (
        <div className={classes.posts}>
            <input type={classes.text} />
            <button>добавить</button>
            <div className={classes.post}>
                <img src="https://s1.1zoom.ru/big3/777/Big_cats_Snow_leopards_476037.jpg" alt="" />
                <div className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel magnam!
                    Consectetur voluptatum consequuntur fugiat labore possimus reiciendis tenetur impedit culpa expedita
                    inventore, reprehenderit sint fugit optio repudiandae, iusto eius.
                </div>
            </div>

        </div>
    );
};
export default Posts;
