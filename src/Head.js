import React from 'react';
import styled from 'styled-components';


/*

creates a head block with alerts info
and alerts shown below the head block
blocks are shown in the bottom right of the window
component is stateles and self styled

The desired view is:
+---------------------------------+
|  amount of alerts  clear button |
+---------------------------------+
+---------------------------------+
|  alert box 0                    |
+---------------------------------+
...................................
+---------------------------------+
|  alert box n                    |
+---------------------------------+

*/

const Head = (props) => {
    if (props.element.length === 0) return null;
    let elementsReverse = props.element.slice().reverse();
    return (
        <div style = {alertsWindow}>
            <AlertBoxTopInfoStyle>
             {props.element.length} notifications
             <AlertBoxClearAllStyle >
                <button style= {buttonStyle} className="test" 
                onClick={props.clearAll}> Hide All </button>
             </AlertBoxClearAllStyle>
            </AlertBoxTopInfoStyle>
            <AlertBoxesViewStyle>
             {elementsReverse}
            </AlertBoxesViewStyle>
          </div>
    )
}

const alertsWindow = {
  position: 'absolute',
  bottom: '0',
  right: '0'
}

const buttonStyle = {
    backgroundColor: 'rgb(34, 37, 41)',
    border: '0px'  
};

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
  &:hover .test {
     color: rgba(255, 255, 255, 0.6);
  }
  `

  const AlertBoxesViewStyle = styled.section`
  width: 285px;
  max-height: 60vh;
  overflow: auto;
  overflow-x: hidden;
  `

  export default Head;