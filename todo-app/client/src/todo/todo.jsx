import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'

import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
 
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        console.log(this.state.description)
    }

    handleChange(event) {
        this.setState({...this.state, description: event.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader title='Tarefas' subtitle='Cadastros...'/>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
            </div>
        )
    }
}
