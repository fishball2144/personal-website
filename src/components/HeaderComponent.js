import React, {Component} from "react"
import {Link} from "react-router-dom";
import { Navbar, NavLink, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
                <Navbar light expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand>Kyle Chan</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/aboutus">
                                        <span className="fa fa-info-circle fa-lg"></span> About Me
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        <span className="fa fa-file fa-lg"></span> My Project
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        <span className="fa fa-address-book"></span> Contact Me
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default Header;


