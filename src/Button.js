import React, { Component } from 'react';
var MdClose = require('react-icons/lib/md/close');

const Button = (props) => {
    try {
        //console.log('Button is here. props are:' + props.id);
        return (
            <div className="alert-box-button">
               <MdClose onClick={props.onClose.bind(props.id)}/>
            </div>
        );
    } catch (err) {
        console.log('Button error: ' + err)
        return null;
    }
}

export default Button;