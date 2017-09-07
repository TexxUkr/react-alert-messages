import React, { Component } from 'react';
import styled from 'styled-components';

const Head = (props) => {
    if (props.element.length === 0) return null;
    return (
        <div>
            <AlertBoxTopInfo>
             {props.element.length} notifications
             <AlertBoxClearAll onClick={props.clearAll}> Hide All </AlertBoxClearAll>
            </AlertBoxTopInfo>
             {props.element}
          </div>
    )
}

const AlertBoxTopInfo = styled.section`
  width: 264px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(34, 37, 41);
  font-family: Roboto, Arial, sans-serif;
  font-size: 12px;
  border-top: 1px solid rgb(68, 74, 82);
  border-bottom : 1px solid rgb(68, 74, 82);
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  `
  
  const AlertBoxClearAll = styled.section`
  color: white;
  `

  export default Head;