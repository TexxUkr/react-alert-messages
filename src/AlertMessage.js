import React from 'react';
import styled from 'styled-components';


/*
    a stateless and self styled element that returns a message of the alert box
    if fullView props is set then message is shown uncut
*/

const AlertMessage = (props) => {
    try {
        if (props.message === null) return null;
         let className="needToHide";
        if(props.fullView) className="";
       
        return (
            <AlertBoxMessageStyle className={className}>
               {props.message}
            </AlertBoxMessageStyle>
        );
    } catch (err) {
        console.log('Message error: ' + err)
        return null;
    }
}

const AlertBoxMessageStyle = styled.section`
   box-sizing: border-box;
   display: block;
   color: rgba(255, 255, 255, 0.6);
   padding-left: 32px;
   padding-right: 32px;
   &.needToHide{
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   }

`

export default AlertMessage;