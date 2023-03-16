import React from "react";
import "./index.css";
import TuitsList from "../tuits-list";
import WhoToFollowList from "../who-to-follow-list";

const HomeComponent = () => {
    return(
        <div className="row">
            <div className="col-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 text-white">
                <TuitsList />
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-5 col-xl-5 col-lg-5 text-white">
                <WhoToFollowList />
            </div>
        </div>
    );
};
export default HomeComponent;