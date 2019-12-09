import React from 'react'
import axios from 'axios'
import './stylesLogin.css'

export default class Login extends React.Component {

    state = {
        usuarios: [],
        login: "",
        senha: "",
        loginC: "",
        senhaC: "",
        erro: ""
    };

    cliqueLogin = async e => {
        e.preventDefault();
        const { login, senha } = this.state;

        if (!login || !senha) {
            this.setState({ error: "Preencha todos os dados para logar" });
        } else {
            try {
                await axios.post(`${process.env.REACT_APP_API}/user/${this.state.login}`, {
                    login: this.state.login,
                    senha: this.state.senha
                }, {
                    crossDomain: true
                }).then(result => {
                    if (result.data != null)
                        this.props.history.push("/home")
                    else (alert("Login ou senha inválidos"))
                })

            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }

    }

    cliqueCadastro = async e => {
        e.preventDefault();
        const { loginC, senhaC } = this.state;

        if (!loginC || !senhaC) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                await axios.post(`${process.env.REACT_APP_API}/user`, {
                    login: this.state.loginC,
                    senha: this.state.senhaC
                }, {
                    crossDomain: true
                }).then(result => {
                    if (result.data != null)
                        this.props.history.push("/home")
                    else (alert("Erro ao cadastrar"))
                })

            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }

    }

    render() {
        return (
            <>
                <div>
                    <form id="fmLogin" class="container" onSubmit={this.cliqueLogin}>
                        <div>
                            <input class="form-control" type="text" name="login" placeholder="Login" value={this.state.login} onChange={e => this.setState({ login: e.target.value })} />
                            <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} />
                            <a className="botoes"><button class="btn btn-outline-primary" type="submit">Logar</button></a>
                        </div>
                    </form>

                    <form id="fmLogin" class="container" onSubmit={this.cliqueCadastro}>
                        <input class="form-control" type="text" name="login" placeholder="Login" value={this.state.loginC} onChange={e => this.setState({ loginC: e.target.value })} />
                        <input class="form-control" type="password" name="senha" placeholder="Senha" value={this.state.senhaC} onChange={e => this.setState({ senhaC: e.target.value })} />
                        <a className="botoes"><button  class="btn btn-outline-secondary" type="submit">Cadastrar</button></a>
                    </form>
                </div>
            </>
        )
    }
}