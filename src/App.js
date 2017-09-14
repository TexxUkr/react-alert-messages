import React, { Component } from 'react';
import AlertBox from './AlertBox.js';
import ButtonsBar from './ButtonsBar.js';
import Head from './Head.js';
import styled from 'styled-components';

/*
Class App renders main info, a bar of buttons (ButtonsBar) - actions to create corresponding alerts and clear alerts, 
alerts window - (Head) with totla info on alerts and alerts elements as an array set in App class state
Class App defines methods to create alert, delete it and delet all the alerts - all methods changes the class state
Class App is a self styled 

The desired view/positioning in window is:
+---------------------------------+
|main info                        |
|buttons bar(ButtonsBar)          |
|              alerts window(Head)|
+---------------------------------+

*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertsArray: new Map(), // a storage - collection of alert boxes created and not closed
      elementId: 0            // alert boxes id counter. probably need to add overflow actions in some way
    }
  }

  /* creates a new one alert box react element and adds it to the strorage */
  createAlertBox(props) {
    let id = this.state.elementId;
    let alertsArray = new Map(this.state.alertsArray);
    alertsArray.set(id,
      <div key={id}>
        < AlertBox
          id={id}
          type={props.type}
          title={props.title}
          message={props.message}
          onClose={this.onAlertClose.bind(this, id)}
        />
      </div>
    )

    this.setState({
      alertsArray: alertsArray,
      elementId: ++id
    })
  };

  clearAllAlertBoxes() {
    //this.state.alertsArray = new Map(); // a storage - collection of alert boxes created and not closed
    // alert boxes id counter. probably need to add overflow actions in some way
    this.setState({
      alertsArray: new Map(),
      elementId: 0
    });
  }

  /* removes an alert box react element from the strorage; rerenders */
  onAlertClose(id) {
    let alertsArray = new Map(this.state.alertsArray);  
    console.log (alertsArray); 
    if (alertsArray.has(id)) {alertsArray.delete(id);
      this.setState({
        alertsArray: alertsArray,
      })
    } else (console.log('unknown id:' + id));
  }

  

  /* render buttons that calls functions to create alert boxes with corresponding props; renders the elements from the storage */
  render() {
    try {
      let element = [];
      for (let boxelemetn of this.state.alertsArray.values()) {
        element.push(boxelemetn)
      }

      return (
        <MainStyle>
          <h3> Overview </h3>
          <p> This component allows you to show notifications after user actions, such as creation, deletion or modification of entities in your application. </p>
          < ButtonsBar 
            createAlertBox={this.createAlertBox.bind(this)} 
            clearAllAlerts={this.clearAllAlertBoxes.bind(this)}
          />
          <div>
            <Head element={element} clearAll={this.clearAllAlertBoxes.bind(this)}/>
          </div>
        </MainStyle>
      );
    } catch (err) { }
  }
}

const MainStyle = styled.section`
  padding-left: 10px;
  padding-top: 10px;
  `

export default App;
