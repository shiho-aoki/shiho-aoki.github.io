import React from 'react';

class TopBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    };
    render() {
        return(
            <div className="topbar">
                <span className="homename">
                   My Portfolio 
                </span>
                <span className="icon">
                    S
                </span>
            </div>
        )
    };
}

export default TopBar;