import React, { Component } from 'react';
import Icon from './Icon.js';
import Title from './Title.js';
import Message from './Message.js';
import Button from './Button.js';


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
            <div className="alert-box" key = {this.props.id} onClick = {this.onOpenFull.bind(this)}>
                <div className = "alert-box-top">
                    <div className = "alert-box-top-left">
                        <div className = "alert-box-icon">
                            <Icon type = {this.props.type}/>
                        </div>
                        <Title title = {this.props.title}/>
                    </div>
                    <Button onClose = {this.props.onClose} id={this.props.id}/>
                </div>
                <Message message = {this.props.message} fullView = {this.state.fullView}/>
            </div>
        );
    } catch (err) {
        console.log('ToasterAlertBox error: ' + err)
        return null;
    }
  }

}

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

