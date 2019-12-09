import React from 'react';
import axios from 'axios';

export default class Tabela extends React.Component {
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
                console.log("aa");
                console.log(result)
                this.setState({
                    semana: result.data
                })
            })
    }

    render() {

        return (
            <div>

                {
                    this.state.semana[1].map((item, key) =>
                        <tbody>
                            <tr>
                                <td id="primary" class="table-light">{key}:00</td>
                                <td class="bg-primary">
                                    {
                                        item.map((it, key) =>
                                            <ul>
                                                <li><a>{it.nome}</a></li>
                                            </ul>
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        item.map((it, key) =>
                                            <ul>
                                                <li><a>{it.nome}</a></li>
                                            </ul>
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        item.map((it, key) =>
                                            <ul>
                                                <li><a>{it.nome}</a></li>
                                            </ul>
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        item.map((it, key) =>
                                            <ul>
                                                <li><a>{it.nome}</a></li>
                                            </ul>
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        item.map((it, key) =>
                                            <ul>
                                                <li><a>{it.nome}</a></li>
                                            </ul>
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        item.map((it, key) =>
                                            <ul>
                                                <li><a>{it.nome}</a></li>
                                            </ul>
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        item.map((it, key) =>
                                            <ul>
                                                <li><a>{it.nome}</a></li>
                                            </ul>
                                        )
                                    }
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </div>
        )
    }
}
