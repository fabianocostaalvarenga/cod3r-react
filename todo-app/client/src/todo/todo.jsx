import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'

import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PageHeader title='Tarefas' subtitle='Cadastros...'/>
                <TodoForm />
            </div>
        )
    }
}
