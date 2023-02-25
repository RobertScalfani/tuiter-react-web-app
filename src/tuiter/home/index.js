import React from "react";
import PostSummaryList from "../post-summary-list";
import NavigationSidebar from "../navigation-sidebar";
import PostList from "../post-list";
import "./index.css";

const HomeComponent = () => {
    return(
        <div className="row">
            <div className="col-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 text-white">
                <PostList />
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-5 col-xl-5 col-lg-5 text-white">
                <PostSummaryList />
            </div>
        </div>
    );
};
export default HomeComponent;