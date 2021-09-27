import React from "react";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Sidebar from "./Sidebar/Sidebar";
import {  Route } from "react-router-dom";
const Main = () => {
    return (
           <main className='main'>
            <div className='container'>
                <Sidebar />
                <Route path="/profile" component={Profile} />
                <Route path="/dialogs" component={Dialogs} />
            
            </div>
        </main>
     
    );
};

export default Main;
