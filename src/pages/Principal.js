import React from 'react';
import { Navbar, Form, Button } from 'react-bootstrap';
import '../components/stylesHeader.css'
import axios from 'axios';

class Principal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            semana: "",
            items: ""
        };
    };

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API}/home`, {
            crossDomain: true
        })
            .then(result => {
                this.setState({
                    semana: result.data
                })
                console.log(result.data);
            })
    }

    renderTable() {

        return this.state.semana && this.state.semana.map((item, chave) => {
            return (
                <tr>
                    <td>{chave}:00</td>
                    {item.map(i => {
                        if (i !== null) {
                            return (
                                <td class="table-light">{i[0].nome}</td>
                            )
                        } else {
                            return (
                                <td class="table-dark"></td>
                            )
                        }
                    })}
                </tr>
            )
        })
    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" id="header">
                    <div id="title"><Navbar.Brand href="#home">AGENDA COMUNITÁRIA</Navbar.Brand></div>
                    <div id="search"> <Form inline >
                        <a className="search_icon" href="/atividades"><Button variant="outline-primary"><i class="fas fa-search"></i></Button></a>
                        <a className="search_icon" href="/"><Button variant="outline-primary" id="logout">Logout</Button></a>
                    </Form></div>
                </Navbar>

                <table class="table table-bordered table-light">
                    <thead>
                        <tr>
                            <th scope="col"><a href="/nova"><button>ADICIONAR</button></a></th>
                            <th scope="col">Domingo</th>
                            <th scope="col">Segunda</th>
                            <th scope="col">Terça</th>
                            <th scope="col">Quarta</th>
                            <th scope="col">Quinta</th>
                            <th scope="col">Sexta</th>
                            <th scope="col">Sábado</th>

                        </tr>
                    </thead>

                    {this.renderTable()}


                </table>
            </>
        )
    }
}

export default Principal;