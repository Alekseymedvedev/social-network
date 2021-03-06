import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
  
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <Posts newPostText={props.state.newPostText} postsArr={props.state.postsArr} dispatch ={props.dispatch }/>
        </div>
    );
};
export default Profile;
