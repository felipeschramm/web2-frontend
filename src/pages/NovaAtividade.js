import React from 'react'
import axios from 'axios'
import { Alert } from 'react-bootstrap'

export default class NovaAtividade extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: "",
            data: "",
            descricao: ""
        }
    }

    cadastrar() {
        if (this.state.nome === "" || this.state.data == null || this.state.descricao === "") {
            alert("Não foi salvo. Existe campos vazios");
        }

        else {
            axios.post(`${process.env.REACT_APP_API}/ativ`, {
                nome: this.state.nome,
                data: this.state.data,
                descricao: this.state.descricao
            }, {
                crossDomain: true
            })
        }
    }

    onHandleClick = () => {

        const v1 = document.getElementById("campoNome").value
        const v2 = document.getElementById("campoData").value
        const v3 = document.getElementById("campoDescricao").value

        this.setState({
            nome: v1,
            data: v2,
            descricao: v3
        })

    }

    render() {
        return (
            <>
                <div>
                    <input id="campoNome" type="text" placeholder="Nome" value={this.state.nome} onChange={this.onHandleClick} />
                    <input id="campoData" type="Datetime-local" placeholder="Data" value={this.state.data} onChange={this.onHandleClick} />
                    <input id="campoDescricao" type="text" placeholder="Descrição" value={this.state.descricao} onChange={this.onHandleClick} />
                    <a href="/home"><button onClick={() => this.cadastrar()}>Salvar</button></a>
                </div>
            </>
        )
    }
}