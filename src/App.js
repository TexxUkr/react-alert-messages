import React, { Component } from 'react';
import './App.css';
import ToasterAlertBox from './Toaster.js';
import Buttons from './Buttons.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertsArray: new Map(), // a storage - collection of alert boxes created and not closed
      elementId: 0            // alert boxes id counter. probably need to add overflow actions in some way
    }
  }

  /* creates a new one alert box react element and adds it to the strorage */
  createToasterAlertBox(props) {
    let id = this.state.elementId++;
    //console.log (props);
    this.state.alertsArray.set(id,
      <div key={id}>
        < ToasterAlertBox
          id={id}
          type={props.type}
          title={props.title}
          message={props.message}
          onClose={this.onClose.bind(this, id)}
        />
      </div>
    )
    //console.log(this.state.alertsArray.size);
    this.setState({})
  };

  clearToasterAlertBox() {
    //this.state.alertsArray = new Map(); // a storage - collection of alert boxes created and not closed
    // alert boxes id counter. probably need to add overflow actions in some way
    this.setState({
      alertsArray: new Map(),
      elementId: 0
    });
  }

  /* removes an alert box react element from the strorage; rerenders */
  onClose(id) {
    //console.log('closing ' + id);
    if (this.state.alertsArray.has(id)) {
      this.state.alertsArray.delete(id);
      this.setState({})
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
        <div className="main">
          <h3> Overview </h3>
          <p> This component allows you to show notifications after user actions, such as creation, deletion or modification of entities in your application. </p>
          < Buttons 
            createToasterAlertBox={this.createToasterAlertBox.bind(this)} 
            clearToasterAlertBox={this.clearToasterAlertBox.bind(this)}
          />
          <div>
          
          </div>

          <div className="results">
            {element}
          </div>
        </div>

      );
    } catch (err) { }
  }
}

export default App;
