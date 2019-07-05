import React from "react";

/*const Label = (props) => {
    return (
        <>
        <span style={props.classStyle.label}> {props.value} </span>
            </>
    );
};*/

class Label extends React.Component {
    constructor (props) {
        super();
    }
    render() {
        return (
            <span className={this.props.classStyle.label}> {this.props.value}> </span>
        );
    }
}

export default Label;