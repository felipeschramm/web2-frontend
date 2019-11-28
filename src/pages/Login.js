import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

    state = {
        usuarios: [],
        login: "",
        senha: "",
        senhaC: ""
    };

    handleChange = async e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    cliqueLogin = () => {
        axios.post(`${process.env.REACT_APP_API}/user/login`, {
            login: this.state.login
        }, {
            crossDomain: true
        })
            .then(result => {
                if (result.data === 2) {
                    console.log("errooo 2");
                }
                if (result.data === 3) {
                    console.log("errooo 3");
                }

                this.setState({ usuarios: result.data });
                console.log(this.state.usuarios);
                Redirect('/home')
            });

    }

    cliqueCadastro = () => {
        axios.post(`${process.env.REACT_APP_API}/user`, {
            login: this.state.login,
            senha: this.state.senha
        }, {
            crossDomain: true
        })
            .then(result => {
                console.log(result.data);
                this.setState({ usuario: result.data });
            });

    }

    render() {
        return (
            <>
                <div>

                    <div>
                        <input type="text" name="login" placeholder="Login" value={this.state.login} onChange={this.handleChange} />
                        <input type="password" name="senha" placeholder="Senha" value={this.state.senha} onChange={this.handleChange} />
                        <button onClick={this.cliqueLogin}>Logar</button>
                    </div>

                    {/* <form>
                        <input type="text" name="login" placeholder="Login" value={this.state.login} onChange={this.handleChange} />
                        <input type="password" name="senha" placeholder="Senha" value={this.state.senha} onChange={this.handleChange} />
                        <input type="password" name="senhaC" placeholder="Confirme a senha" value={this.state.senhaC} onChange={this.handleChange} />
                        <a><button onClick={this.cliqueCadastro}>Cadastrar</button></a>
                    </form> */}
                </div>
            </>
        )
    }
}

// happy path
// death path