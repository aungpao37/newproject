import React, { Component } from 'react';
import './style.css';
import './layout.css'
import PageHedder from './page-header';
import Pagecontainer from './page-container';
import Reactmodal from './reactmodal';

class App extends Component {
  render() {
    return (
      <main>
        <div className="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md">
        <PageHedder></PageHedder>
        <div className="clearfix"/>
        <Pagecontainer></Pagecontainer>
        </div>
      </main>
      
    );
  }
}

export default App;
