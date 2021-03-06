import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Consumer from './consumer/consumer';
import ConsumerWithDockOpened from './consumer/consumer-with-dock-opened/consumer-with-dock-opened';
import Business from './business/business';
import BusinessWithDockOpened from './business/business-with-dock-opened/business-with-dock-opened';
import TreeView from './tree/tree-view';
import MedicalInfoView from './medical-info/medicalInfoView';
import LegalInfoView from './legal-info/legal-info-view';
import DoctorsView from './doctors/doctors-view';
import LawyersView from './lawyers/lawyers-view';
import ConsumerWithMenuoverFlowOpen from './consumer/consumer-with-dock-opened/consumer-with-menu-overflow';
import ConsumerWithBallonWrenchActive from './consumer/consumer-with-dock-opened/consumer-with-balloon-wrench-active.js';
import Home from './home/home';
import TreeViewWithDockOpened from './tree/tree-view-with-dock-opened';
import TreeViewVanilla from './tree/tree-view-vanilla';
import TreeViewVanillaOpened from './tree/tree-view-vanilla-opened';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="ipad-container">
      <Switch>
        <Route path="/Home" exact component={Home}></Route>
        <Route path="/Consumer" exact component={Consumer}></Route>
        <Route path="/ConsumerWithDockOpened" exact component={ConsumerWithDockOpened}></Route>
        <Route path="/Business" component={Business}></Route>
        <Route path="/BusinessWithDockOpened" exact component={BusinessWithDockOpened}></Route>
        <Route path="/MenuOverflowOpen" exact component={ConsumerWithMenuoverFlowOpen}></Route>
        <Route path="/BalloonWrenchActive" exact component={ConsumerWithBallonWrenchActive}></Route>
        <Route path="/Tree" component={TreeView}></Route>
        <Route path="/TreeViewWithDockOpened" component={TreeViewWithDockOpened}></Route>
        <Route path="/TreeViewVanilla" component={TreeViewVanilla}></Route>
        <Route path="/TreeViewVanillaOpened" component={TreeViewVanillaOpened}></Route>
        <Route path="/Medical-Info" exact component={MedicalInfoView}></Route>
        <Route path="/Legal-Info" exact component={LegalInfoView}></Route>
        <Route path="/Doctors" exact component={DoctorsView}></Route>
        <Route path="/Lawyers" exact component={LawyersView}></Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
