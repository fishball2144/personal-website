import React, {Component} from "react";
import {CardImg, Card, CardBody, CardHeader, CardTitle,CardText,Progress,CardSubtitle } from 'reactstrap';

class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardHeader>About Me</CardHeader>
                            <CardImg src="assets/images/chem-cat.png" alt="chem cat"/>
                            <CardBody>
                                <CardTitle>Kyle Chan</CardTitle>
                                <CardText>A Chemistry graduate from HKUST.</CardText>
                                <CardText> Here is my webpage to share my programming experience.</CardText>   
                                <CardText>It is never too late to learn new things.</CardText>   
                            </CardBody>
                        </Card>

                    </div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardHeader>Programming Level</CardHeader>
                            <CardBody>
                                <CardTitle>Language</CardTitle>
                                <CardText className="text-center">HTML</CardText>
                                <Progress value="100"/>
                                <CardText className="text-center">CSS</CardText>
                                <Progress value="100"/>
                                <CardText className="text-center">Python</CardText>
                                <Progress value="100"/>
                                <CardText className="text-center">JavaScipt</CardText>
                                <Progress value="75">Difficult than Python</Progress>
                            </CardBody>
                            <CardBody>
                                <CardTitle>Framework/Library</CardTitle>
                                <CardText className="text-center">React</CardText>
                                <Progress value="50">Working on it!</Progress>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardHeader>Programming Course</CardHeader>
                            <CardBody>
                                <CardTitle>Comp1021</CardTitle>
                                <CardSubtitle>HKUST</CardSubtitle>
                                <CardText>A Course about Python programming</CardText>
                                <CardTitle>Full-Stack Web Development with React</CardTitle>
                                <CardSubtitle>Coursera</CardSubtitle>
                                <CardText>Course about Bootstrap4 and React</CardText>
                                <CardTitle>Learn JavaScipt</CardTitle>
                                <CardSubtitle>Codecademy</CardSubtitle>
                                <CardText>Course about JavaScipt programming</CardText>
                                <CardTitle>Basic HTML and CSS</CardTitle>
                                <CardSubtitle>Freecodecamp</CardSubtitle>
                                <CardText>Course about HTML and CSS</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;