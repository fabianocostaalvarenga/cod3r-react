import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'

import React, { Component } from 'react'

import Header from '../template/header'

export default class Todo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title='Tarefas' subtitle='Cadastros...'/>
            </div>
        )
    }
}
