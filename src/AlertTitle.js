
import styled from 'styled-components';
import React from 'react';
/*
    a stateless and self styled element that returns a title of the alert in the alert box
*/

const AlertTitle = (props) => {
        if ( props.title == null ) return null;
        return ( 
            <section className={props.className}>
            {props.title} 
            </section>
        )
}

const AlertTitleStyled = styled(AlertTitle)`
  color: white;
  box-sizing: border-box;
  word-wrap: break-word;
  display: block;
  line-height: 18px;
  padding-top: 1px;
  padding-right: 5px;
`

export default AlertTitleStyled;