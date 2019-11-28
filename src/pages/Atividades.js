import React from 'react';
import axios from 'axios'
import './stylesAtividades.css'

export default class Atividade extends React.Component {
    state = {
        busca: "",
        atividades: []
    };

    pegarApi = () => {
        axios.get(`${process.env.REACT_APP_API}/home`, {
            crossDomain: true
        })
            .then(result => {
                console.log(result);
                this.setState({ atividades: result.data });
            });
    };

    componentDidMount() {
        this.pegarApi();
    }

    handleChange = async e => {
        this.setState({ busca: e.target.value });

        axios.get(`${process.env.REACT_APP_API}/ativ/${this.state.busca}`, {
            crossDomain: true
        })
            .then(result => {
                console.log(result);
                this.setState({ atividades: result.data });

            });
    };

    render() {
        return (
            <>
                <div id="linha">
                    <input type="text" placeholder="Pesquise" className="mr-sm-2" onChange={this.handleChange} value={this.state.busca} />
                </div>

                <h2 id="titulo">Atividades Encontradas</h2>

                {this.state.atividades.map(ativ => (
                    <div id="espaco">

                        <div id="container">
                            <h2>{ativ.nome}</h2>
                            <p id="pData">{ativ.data}</p>
                            <p id="pDesc">{ativ.descricao}</p>
                        </div>
                    </div>
                ))}
                <button id="voltar"><a href="/home">Voltar</a></button>
            </>
        )
    }
}
