import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink >
    )
}
const Messages = (props) => {
    return (
        <div className={`${classes.message} ${classes.yourMessage}`} id={props.id}>{props.message}</div>
    )
}


const Dialogs = (props) => {

let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
let messagesElements = props.state.messages.map(m => <Messages id={m.id} message={m.message} />)

let addMessage =()=>{

}
    return (
         
        <div className={classes.dialogs}>
            
            <div className={classes.inner}>
                {dialogElements}
            </div>
            <div className={classes.inner}>
                {messagesElements}

            </div>
            <textarea cols="30" rows="5" ></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
        
    );
};

export default Dialogs;
