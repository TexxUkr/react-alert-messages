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
        <section className={props.className}>
            <div className="header">
                {props.element.length} notifications
                <button className="hideButton"
                    onClick={props.clearAll}> Hide All </button>
            </div>
            <div className="elements">
                {elementsReverse}
            </div>
        </section>
    )
}

const HeadStyled = styled(Head) `
    position: absolute;
    bottom: 0px;
    right: 20px;

    .header {
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
    }

    .hideButton {
        color: white;
        background-color: rgb(34, 37, 41);
        border: 0px;
        &:hover {
                color: rgba(255, 255, 255, 0.6);
        }
    }
    
    .elements {
        width: 264px;
        max-height: 60vh;
        overflow: auto;
        overflow-x: hidden;
    }
`

export default HeadStyled;