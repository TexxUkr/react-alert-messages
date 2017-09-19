import React, { Component } from 'react';
import AlertIcon from './AlertIcon';
import AlertTitle from './AlertTitle';
import AlertMessage from './AlertMessage';
import CloseButton from './AlertCloseButton';
import styled from 'styled-components';


/* 
a component with a state that stores the state to show or not a full view with uncut message 
creates element based on props and rerenders if mouse clicked on it to show/hide a full view 
component is a self styled

The desired view is:
+---------------------------------+
|  type icon  title  close button |
|---------------------------------     
|            message              |
+---------------------------------+

message is cut y default 
could be shown in case if clicked using onOpenFull method and state

*/

class AlertBox extends Component {
    constructor(props){
        super (props);
        this.state = {
        fullView: false
        }
    }

    onOpenFull = () => {
        //console.log('full view')
        this.setState({
            fullView: this.state.fullView ? false : true
        });
    }

  render(){

        //console.log('TasterAlertBox is here. props are:' + this.props.type +' '+ this.props.title +' '+ this.props.message);
        return (
            <div className = {this.props.className} key = {this.props.id} >
                <div className="topStyle">
                    <div className="topLeftStyle">
                        <AlertIcon type = {this.props.type}/>
                        <AlertTitle title = {this.props.title}/>
                    </div>
                    <CloseButton onClick = {this.props.onClose}/>
                </div>
                <AlertMessage onClick = {this.onOpenFull} message = {this.props.message} fullView = {this.state.fullView}/>
            </div>
        );
    
  }

}

const AlertBoxStyled = styled(AlertBox)`
    width: 264px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(34, 37, 41, 0.88);
    font-family: Roboto, Arial, sans-serif;
    font-size: 12px;
    border-top: 1px solid rgb(68, 74, 82);
    border-bottom : 1px solid rgb(68, 74, 82);
  
    .topStyle {
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .topLeftStyle {
        flex-direction: row;
        display: flex;
    }

`

export default AlertBoxStyled;
