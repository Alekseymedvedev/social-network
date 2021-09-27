import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <Posts />
        </div>
    );
};
export default Profile;
