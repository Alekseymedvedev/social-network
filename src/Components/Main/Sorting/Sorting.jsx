import classes from "./Sorting.module.css";


const Sorting = () => {
    return (
        <div className={classes.sorting}>
            <span className={classes.title}>Сортировать по:</span>
            <span className={classes.name}>Дате</span>
            <span className={classes.name}>Количеству лайков</span>
        </div>
    );
};

export default Sorting;
