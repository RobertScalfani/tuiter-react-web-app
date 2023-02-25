import React from 'react';

const NavigationItem = (
    {
        link = "#",
        title = "",
        icon = "",
        active = ""
    }
) => {

    return (
        <a href={link} className={`list-group-item ${active === title ?'active':''}`}>
            <div className="d-flex">
                <i className={`${icon} align-self-center`}></i>
                <span className="d-none d-xl-block d-xxl-block">&nbsp;{title}</span>
            </div>
        </a>
    );
}

export default NavigationItem;