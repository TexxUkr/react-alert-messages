import React from 'react';
import styled from 'styled-components';

/*
    a stateless and self styled element that returns a title of the alert in the alert box
*/

const AlertTitle = (props) => {
    try {
        if (props.title === null) return null;
        //console.log('Title is here. props are:' + props.title);
        return (
            <AlertBoxTitleStyle>
               {props.title}
            </AlertBoxTitleStyle>
        );
    } catch (err) {
        console.log('Title error: ' + err)
        return null;
    }
}

const AlertBoxTitleStyle = styled.section`
  color: white;
  box-sizing: border-box;
  word-wrap: break-word;
  display: block;
  line-height: 18px;
  padding-top: 1px;
`

export default AlertTitle;