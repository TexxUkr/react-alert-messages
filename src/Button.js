import React, { Component } from 'react';
import styled from 'styled-components';
var MdClose = require('react-icons/lib/md/close');

const Button = (props) => {
    try {
        //console.log('Button is here. props are:' + props.id);
        return (
            <AlertBoxButtonStyle>
               <MdClose onClick={props.onClose.bind(props.id)}/>
            </AlertBoxButtonStyle>
        );
    } catch (err) {
        console.log('Button error: ' + err)
        return null;
    }
}

const AlertBoxButtonStyle = styled.section`
 color: white;
 padding-left: 8px;
 padding-right: 1px;
 align-self: flex-start;
`

export default Button;