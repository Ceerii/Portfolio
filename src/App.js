import React from 'react';
import './App.css';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends React.Component{
  render(){
    return (
      <Router> 
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/home/" component={Home}/>
     </Switch>
      </Router>
    
    );
  }
}


export default App;
