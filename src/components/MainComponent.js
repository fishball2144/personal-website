import React, {Component} from 'react';
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";

class Main extends Component{
    render(){
        return(
        <div>
            <Header/>
            <Switch>
              <Route exact path="/aboutus" component={()=><About/>}/>
            </Switch>
        </div>
        )
    }
}

export default Main;