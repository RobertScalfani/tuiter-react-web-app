import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationItem = (
    {
        link = "#",
        title = "",
        icon = "",
    }
) => {

    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];

    return (
        <Link to={link} className={`list-group-item ${active.toUpperCase() === title.toUpperCase() ?'active':''}`}>
            <div className="d-flex">
                <i className={`${icon} align-self-center`}></i>
                <span className="d-none d-xl-block d-xxl-block">&nbsp;{title}</span>
            </div>
        </Link>
    );
}

export default NavigationItem;