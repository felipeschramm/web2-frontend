import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Principal from '../pages/Principal'
import Atividades from '../pages/Atividades'
import Login from '../pages/Login'
import Nova from '../pages/NovaAtividade'

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Principal}/>
                    <Route path="/atividades" component={Atividades}/>
                    <Route path="/nova" component={Nova}/>
                </Switch>
            </BrowserRouter>
        )
    }
}