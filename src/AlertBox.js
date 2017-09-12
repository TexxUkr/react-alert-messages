import React, { Component } from 'react';
import AlertIcon from './AlertIcon.js';
import AlertTitle from './AlertTitle.js';
import AlertMessage from './AlertMessage.js';
import AlertCloseButton from './AlertCloseButton.js';
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
                        <AlertIcon type = {this.props.type}/>
                        <AlertTitle title = {this.props.title}/>
                    </AlertBoxTopLeftStyle>
                    <AlertCloseButton onClose = {this.props.onClose} id={this.props.id}/>
                </AlertBoxTopStyle>
                <AlertMessage message = {this.props.message} fullView = {this.state.fullView}/>
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

/* depriicated
AlertBox.propTypes = {
    type: React.PropTypes.string,
    title: React.PropTypes.string,
    message: React.PropTypes.string,
    id: React.PropTypes.number
}
*/
export default AlertBox;
