import React from 'react';
import styled from 'styled-components';
var MdClose = require('react-icons/lib/md/close');

const AlertCloseButton = (props) => {
    try {
        return (
            <AlertBoxButtonStyle>
                <button style= {buttonStyle} className="test" onClick={props.onClose.bind(props.id)}>
                    <MdClose/>
                </button>
            </AlertBoxButtonStyle>
        );
    } catch (err) {
        console.log('Button error: ' + err)
        return null;
    }
}

const buttonStyle = {
    backgroundColor: 'rgba(34, 37, 41, 0)',
    border: '0px'  
};

const AlertBoxButtonStyle = styled.section`
 color: white;
 padding-left: 8px;
 padding-right: 1px;
 align-self: flex-start;
`

export default AlertCloseButton;