import React from "react";
import navigationOptions from "./navigationOptions.json";
import NavigationItem from "./navigation-item";

const NavigationSidebar = (
    {
        active = ''
    }
) => {
    return (
        <div className="list-group">
            {navigationOptions.map(navOpt => {
                return (
                    <NavigationItem
                        link={navOpt.link}
                        title={navOpt.title}
                        icon={navOpt.icon}
                        active={active}
                    />
                )
            })}
        </div>
    );
};

export default NavigationSidebar;