import React from 'react';
import styled from 'styled-components';


/*
    a stateless and self styled element that returns a message of the alert box
    if fullView props is set then message is shown uncut
*/

const AlertMessage = (props) => {
    if (props.message == null) return null;
    return (
        <section className={props.className + ' ' + (!props.fullView ? 'short' : '')} onClick={props.onClick}>
            {props.message}
        </section>
    );
}

const AlertMessageStyle = styled(AlertMessage)`
    box-sizing: border-box;
    display: block;
    color: rgba(255, 255, 255, 0.6);
    padding-left: 32px;
    padding-right: 32px;
    cursor: pointer;

    &.short {
        height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

export default AlertMessageStyle;