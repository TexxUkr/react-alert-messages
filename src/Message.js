import React, { Component } from 'react';

const Message = (props) => {
    try {
        if (props.message === null) return null;
         let className="alert-box-message";
        if(props.fullView) className="alert-box-message-unhidden";
       
        return (
            <div className={className}>
               {props.message}
            </div>
        );
    } catch (err) {
        console.log('Message error: ' + err)
        return null;
    }
}


export default Message;