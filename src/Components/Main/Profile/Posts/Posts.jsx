import Sorting from "../../Sorting/Sorting";
import Post from "./Post/Post";
import classes from "./Posts.module.css";
import React from 'react';
import {addPostActionCreatore,newPostTextActionCreator} from "./../../../../redux/state"



const Posts = (props) => {
 
    let error='';
    let post = props.postsArr.map(p => <Post id={p.id} like={p.like} time={p.time} img={p.img} text={p.text} />)

    let newPostItem = React.createRef();
    let addNewPost = () => {

        if (newPostItem.current.value != '') {
            props.dispatch(addPostActionCreatore());
        } else {
            alert('а кто заполнять будет');

            // let error =  '<span>а кто заполнфть будет</span>'
            // console.log(error);
        }

    }

    let onPostChange = () => {

        let text = newPostItem.current.value;

        props.dispatch(newPostTextActionCreator(text));
    }



    return (
        <div className={classes.posts}>
            <form className={classes.form}>
                <textarea ref={newPostItem} value={props.newPostText} onChange={onPostChange} cols="30" rows="10"></textarea>
                <span>{error}</span>
                <button type="button" onClick={addNewPost} >добавить</button>
            </form>
            <div className={classes.title}>Ваши посты</div>
            <Sorting />
            {post}

        </div>
    );
};
export default Posts;
