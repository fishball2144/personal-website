import React, {Component} from "react";
import {Media} from "reactstrap";
import {RECOMMEND} from "../Shared/recommend";


function RenderRecommend(recommend){
    return(
        <div className="container">
            <Media>
                <Media left href="#">
                    <Media object data-src="assets/images/freecodecamp.jpg" alt=""/>
                </Media>
                <Media body>
                    <Media heading>
                        {recommend.name}
                    </Media>
                        {recommend.desciption}
                </Media>
            </Media>
        </div>
    )
}

class Recommend extends Component{
    render(){
        return(
            <RenderRecommend/>
        )
    }
}

export default Recommend;