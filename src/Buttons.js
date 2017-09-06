import React, { Component } from 'react';

const Buttons = (props) => {

    /* just definitions of props for various type of aler boxes creation */
    let objPropsWarning = {
        type: 'warning',
        title: 'This is a warning message',
        message: null
    }

    let objPropsError = {
        type: 'error',
        title: 'Adding contact failed becuase connection could not be made to the database',
        message: 'some kind of additional info to be provided here. Could be long enough.'
    }

    let objPropsInfo = {
        type: 'info',
        title: 'This is an info message',
        message: null
    }

   let objPropsQuery = {
        type: 'query',
        title: 'Operation is in process, please wait',
        message: null
    }

    let objPropsCheck = {
        type: 'check',
        title: 'Saving project successful',
        message: null
    }

    return (
            <div className="buttons">
                <div>
                    <button className="btn btn-primary btn-sm" onClick={ () =>{ props.createToasterAlertBox(objPropsWarning)}}> Create a warning box </button>
                </div>
                <div>
                    <button className="btn btn-primary btn-sm" onClick={ () => { props.createToasterAlertBox(objPropsCheck)}}> Create a check box </button>
                </div>
                <div>
                    <button className="btn btn-primary btn-sm" onClick={() => { props.createToasterAlertBox(objPropsQuery)}}> Create a query box </button>
                </div>
                <div>
                    <button className="btn btn-primary btn-sm" onClick={() => { props.createToasterAlertBox(objPropsError)}}> Create an error box </button>
                </div>
                <div>
                    <button className="btn btn-primary btn-sm" onClick={() => { props.createToasterAlertBox(objPropsInfo)}}> Create an info box </button>
                </div>
                <div>
                    <button className="btn btn-danger btn-sm" onClick={ () => {props.clearToasterAlertBox()}}> Clear all the boxes </button>
                </div>
            </div>
        )
    }


export default Buttons;