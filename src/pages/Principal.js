import React from 'react';
import Header from '../components/Header';
import Tabela from '../components/Tabela';

class Principal extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Tabela/>
            </>
        )
    }
}

export default Principal;