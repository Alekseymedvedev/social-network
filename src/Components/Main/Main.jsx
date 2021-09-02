import React from "react";
import Profile from "./Home/Profile/Profile";
import Messages from "./Home/Messages/Messages";
import Sidebar from "./Sidebar/Sidebar";
import {  Route } from "react-router-dom";
const Main = () => {
    return (
           <main className='main'>
            <div className='container'>
                <Sidebar />
                <Route path="/profile" component={Profile} />
                <Route path="/messages" component={Messages} />
            
            </div>
        </main>
     
    );
};

export default Main;
