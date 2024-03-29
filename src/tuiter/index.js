import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import WhoToFollowList from "./who-to-follow-list";
import React from "react";
import EditProfile from "./edit-profile";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-sm-2">
                    <NavigationSidebar />
                </div>
                <div className="col-7 col-xl-7 col-lg-6 col-md-10 col-sm-10"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-3 col-xl-3 col-lg-4 text-white">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter