import React from "react";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
    return (
        <main className='main'>
            <div className='container'>
                <Sidebar />

                <Profile />
            </div>
        </main>
    );
}

export default Main;
