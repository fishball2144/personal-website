import React, {Component} from 'react';
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Recommend from "./RecommendComponent";
import Footer from "./FooterComponent";
import {Switch, Route} from "react-router-dom";

class Main extends Component{
    render(){
        return(
        <div>
            <Header/>
            <Switch>
              <Route exact path="/aboutus" component={()=><About/>}/>
              <Route exact path="/learning" component={()=><Recommend/>}/>
            </Switch>
            <span>&nbsp;&nbsp;</span>
            <Footer/>
        </div>
        )
    }
}

export default Main;