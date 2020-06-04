import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader,ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state={
            isNavOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    
    render() {
        return(
            <div>
                <Navbar dark fixed="bottom" expand="md">
                    <div className="container nav">
                        <NavbarToggler className="navbar-toggler" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/notes'><span className="fa fa-pencil fa-lg"></span> Notes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/inspiration'><span className="fa fa-space-shuttle fa-lg"></span> Inspiration</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;