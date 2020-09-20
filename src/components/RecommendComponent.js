import React, {Component} from "react";
import {Media} from "reactstrap";

class Recommend extends Component{
    render(){
        return(
            <div className="container">
                <Media>
                    <Media left href="#">
                        <Media object data-src="assets/images/freecodecamp.jpg" alt=""/>
                    </Media>
                    <Media body>
                        <Media heading>
                            freeCodeCamp
                        </Media>
                        Great website to learn HTML and CSS
                    </Media>
                </Media>
                <Media>
                    <Media left href="#">
                        <Media object data-src="./assets/images/freecodecamp.jpg" alt=""/>
                    </Media>
                    <Media body>
                        <Media heading>
                            Codecademy
                        </Media>
                        Some free courses are available in Codecademy!!
                    </Media>
                </Media>
            </div>
        )
    }
}

export default Recommend;