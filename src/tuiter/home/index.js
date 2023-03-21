import React from "react";
import "./index.css";
import TuitsList from "../tuits-list";
import WhoToFollowList from "../who-to-follow-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <div className="text-white">
            <h3 className='text-black'>
                Home
            </h3>
            <WhatsHappening />
            <TuitsList />
        </div>
    );
};
export default HomeComponent;