import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter