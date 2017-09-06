import React, { Component } from 'react';

const Title = (props) => {
    try {
        if (props.title === null) return null;
        //console.log('Title is here. props are:' + props.title);
        return (
            <div className="alert-box-title">
               {props.title}
            </div>
        );
    } catch (err) {
        console.log('Title error: ' + err)
        return null;
    }
}

export default Title;