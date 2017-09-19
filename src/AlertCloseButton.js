import React from 'react';
import styled from 'styled-components';
var MdClose = require('react-icons/lib/md/close');

const AlertCloseButton = (props) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <MdClose/>
        </button>
    );
}


const AlertCloseButtonStyled = styled(AlertCloseButton)`
    color: white;
    padding: 3px;
    align-self: flex-start;
    background-color: rgba(34, 37, 41, 0);
    border: 0px; 
`

export default AlertCloseButtonStyled;