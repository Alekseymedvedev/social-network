import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

let dialogs = [
    { id: 1, name: 'Владимир' },
    { id: 2, name: 'Юля' },
    { id: 3, name: 'Руслан' },
    { id: 4, name: 'Линар' },
    { id: 5, name: 'Лиза' },
]
let messages = [
    { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis explicabo quidem natus, debitis esse voluptate eligendi dignissimos impedit, eaque id sapiente recusandae repellat ipsam quia exercitationem labore quisquam corrupti?' },
    { id: 2, message: 'Hello-2' },
    { id: 3, message: 'Hello-3' },
    { id: 4, message: 'Hello-4' },
    { id: 5, message: 'Hello-5' }
]


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink >
    )
}
const Messages = (props) => {
    return (
        <div className={classes.message} id={props.id}>{props.message}</div>
    )
}

let dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
let messagesElements = messages.map(m => <Messages id={m.id} message={m.message} />)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.inner}>
                {dialogElements}
            </div>
            <div className={classes.inner}>
              {messagesElements}

            </div>
        </div>
    );
};

export default Dialogs;
