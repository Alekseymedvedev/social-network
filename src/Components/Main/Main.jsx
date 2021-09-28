import React from "react";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Sidebar from "./Sidebar/Sidebar";
import { Route } from "react-router-dom";

const Main = (props) => {
    return (

        <main className='main'>

            <div className='container'>
                <Sidebar />
                <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPost={props.updateNewPost} />} />
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />

            </div>
        </main>

    );
};

export default Main;
