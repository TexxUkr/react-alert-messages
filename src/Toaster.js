import React, { Component } from 'react';
import Icon from './Icon.js';
import Title from './Title.js';
import Message from './Message.js';
import Button from './Button.js';
import styled from 'styled-components';


/* a component with a state that stores the state to show or not a full view with uncut message */
/* creates element based on props and rerenders if mouse clicked on it to show/hide a full view */

class ToasterAlertBox extends Component {
  constructor(props){
    super (props);
    this.state = {
      fullView: false
    }
  }

  onOpenFull(){
    this.setState({
        fullView: this.state.fullView ? false : true
    })
  }

  render(){
    try {
        //console.log('TasterAlertBox is here. props are:' + this.props.type +' '+ this.props.title +' '+ this.props.message);
        return (
            <AlertBoxStyle key = {this.props.id} onClick = {this.onOpenFull.bind(this)}>
                <AlertBoxTopStyle>
                    <AlertBoxTopLeftStyle>
                            <Icon type = {this.props.type}/>
                        <Title title = {this.props.title}/>
                    </AlertBoxTopLeftStyle>
                    <Button onClose = {this.props.onClose} id={this.props.id}/>
                </AlertBoxTopStyle>
                <Message message = {this.props.message} fullView = {this.state.fullView}/>
            </AlertBoxStyle>
        );
    } catch (err) {
        console.log('ToasterAlertBox error: ' + err)
        return null;
    }
  }

}

const AlertBoxStyle = styled.section`
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
`

const AlertBoxTopStyle =  styled.section`
 flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const AlertBoxTopLeftStyle = styled.section`
  flex-direction: row;
  display: flex;
`


ToasterAlertBox.propTypes = {
    type: React.PropTypes.string,
    title: React.PropTypes.string,
    message: React.PropTypes.string,
    id: React.PropTypes.number
}

export default ToasterAlertBox;

/* 
   an old version of stateless component just shows icon, info and button to close 
   does not open full info on message in case of click on element
*/

const ToasterAlertBoxOld= (props) => {
    try {
        console.log('TasterAlertBox is here. props are:' + props.type +' '+ props.title +' '+ props.message);
        return (
            <div className="alert-box" onClick = {props.onOpenFull}>
                    <div className = "alert-box-icon">
                        <Icon type = {props.type}/>
                    </div>
                    <Button onClose = {props.onClose} id={props.id}/>
                    <div className = "alert-box-info">
                      <div>
                         <Title title = {props.title}/>
                      </div>
                      <div>
                         <Message message = {props.message} fullView = {props.fullView}/>
                      </div>
                    </div>
            </div>
        );
    } catch (err) {
        console.log('ToasterAlertBox error: ' + err)
        return null;
    }
}

