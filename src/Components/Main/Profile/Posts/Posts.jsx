import Sorting from "../../Sorting/Sorting";
import Post from "./Post/Post";
import classes from "./Posts.module.css";
import React from 'react';




const Posts = (props) => {

    let post = props.postsArr.map(p => <Post id={p.id} like={p.like} time={p.time} img={p.img} text={p.text} />)
    
    let newPostItem = React.createRef();

    let addNewPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostItem.current.value;
        props.updateNewPost(text);
    }

    

    return (
        <div className={classes.posts}>
            <form className={classes.form}>
                <textarea ref={newPostItem} value={props.newPostText} onChange={onPostChange} cols="30" rows="10"></textarea>
                <button type="button" onClick={addNewPost} >добавить</button>
            </form>
            <div className={classes.title}>Ваши посты</div>
            <Sorting />
            {post}

        </div>
    );
};
export default Posts;
