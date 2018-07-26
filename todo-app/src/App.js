import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponent from './MyComponent.js';
// import FormComponent from './FormComponent.js';
// import ClassExample from './ClassExample';
// import DataTableComponent from './DataTableComponent';
// import RetreiveApi from './RetrieveApi.js';
import Testclass from './ShowTodoData.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyComponent/>
        <FormComponent country="Nepal"/> */}
        {/* <ClassExample/> */}
        {/* <DataTableComponent/> */}
        {/* <RetreiveApi/> */}
        <Testclass/>
      </div>
    );
  }
}

export default App;
