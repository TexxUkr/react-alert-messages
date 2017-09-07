import React, { Component } from 'react';
import styled from 'styled-components';

const Head = (props) => {
    if (props.element.length === 0) return null;
    return (
        <div>
            <AlertBoxTopInfoStyle>
             {props.element.length} notifications
             <AlertBoxClearAllStyle onClick={props.clearAll}> Hide All </AlertBoxClearAllStyle>
            </AlertBoxTopInfoStyle>
            <AlertBoxesViewStyle>
             {props.element}
            </AlertBoxesViewStyle>
          </div>
    )
}

const AlertBoxTopInfoStyle = styled.section`
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

  const AlertBoxClearAllStyle = styled.section`
  color: white;
  `

  const AlertBoxesViewStyle = styled.section`
  width: 285px;
  max-height: 60vh;
  overflow: auto;
  overflow-x: hidden;
  `

  export default Head;