import React from 'react';
import axios from 'axios'
import './stylesAtividades.css'

export default class Atividade extends React.Component {
    state = {
        busca: "",
        atividades: []
    };

    pegarApi = () => {
        console.log("aaa")
        axios.get("http://localhost:9999/api/home/" + this.state.busca, {
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


    clickedButton = () => {
        const texto = document.getElementById("busca").value;
        console.log(texto);
        this.setState({ busca: texto });
        {this.pegarApi()}
    }

    render() {
        return (
            <>
                <div id="linha">
                    <input id="busca" type="text" placeholder="Pesquise" className="mr-sm-2" />
                    <button onClick={this.clickedButton}>Ir</button>
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