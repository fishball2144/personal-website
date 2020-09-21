import React, {Component} from 'react';
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Recommend from "./RecommendComponent";
import Footer from "./FooterComponent";
import {Switch, Route} from "react-router-dom";
import {RECOMMEND} from "../Shared/recommend";

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            recommend:RECOMMEND,
        }
    }
    render(){
        return(
        <div>
            <Header/>
            <Switch>
              <Route exact path="/aboutus" component={()=><About/>}/>
              <Route exact path="/learning" component={()=><Recommend recommend={this.state.recommend}/>}/>
            </Switch>
            <span>&nbsp;&nbsp;</span>
            <Footer/>
        </div>
        )
    }
}

export default Main;