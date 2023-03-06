import React from "react";
import navigationOptions from "./navigationOptions.json";
import NavigationItem from "./navigation-item";

const NavigationSidebar = () => {
    return (
        <div className="list-group">
            {navigationOptions.map(navOpt => {
                return (
                    <NavigationItem key={navOpt._id}
                        link={navOpt.link}
                        title={navOpt.title}
                        icon={navOpt.icon}
                    />
                )
            })}
        </div>
    );
};

export default NavigationSidebar;