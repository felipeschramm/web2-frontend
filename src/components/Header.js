import React, { Component } from 'react';
import { Navbar, FormControl, Form, Button} from 'react-bootstrap';
import "../components/stylesHeader.css"

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" id="header">
                    <div id="title"><Navbar.Brand href="#home">AGENDA COMUNITÁRIA</Navbar.Brand></div>
                    <div id="search"> <Form inline >
                        <a class="search_icon" href="/atividades"><Button variant="outline-primary"><i class="fas fa-search"></i></Button></a>
                        <a class="search_icon" href="/"><Button variant="outline-primary" id="logout">Logout</Button></a>
                    </Form></div>
                </Navbar>
            </>
        )
    }
}