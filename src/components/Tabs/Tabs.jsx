import React, { Component } from "react";

import "./Tabs.css";

class Tabs extends Component {
    render() { 
        return(
            <div className="Tabs" ref={ el => this.root = el }>
                {React.Children.map(this.props.children, (child, i) => {
                    let className = "Tabs__Tab";
                    if(child.key === this.props.active) { 
                        className = `${ className } Tabs__Tab--active`; 
                    }
                    return(
                        <div className={ className } onClick={ () => { this.props.onChange(child.key); } }>
                            { child }
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Tabs;