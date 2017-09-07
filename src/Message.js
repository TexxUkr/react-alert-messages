import React, { Component } from 'react';
import styled from 'styled-components';

const Message = (props) => {
    try {
        if (props.message === null) return null;
         let className="needToHide";
        if(props.fullView) className="";
       
        return (
            <AlertBoxMessage className={className}>
               {props.message}
            </AlertBoxMessage>
        );
    } catch (err) {
        console.log('Message error: ' + err)
        return null;
    }
}
const AlertBoxMessageUnhidden = styled.section`
   box-sizing: border-box;
   display: block;
   color: rgba(255, 255, 255, 0.6);
   padding-left: 32px;
   padding-right: 32px;

`
const AlertBoxMessage = styled.section`
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

export default Message;