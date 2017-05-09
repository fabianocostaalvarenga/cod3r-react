import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'
import axios from 'axios'

import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
 
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleReset = this.handleReset.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => 
        this.setState({ ...this.state, description, list: resp.data }))
    }    

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then( resp => this.refresh())
    }

    handleChange(event) {
        this.setState({...this.state, description: event.target.value })
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then( resp => this.refresh(this.state.description) )
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true }).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false }).then(resp => this.refresh(this.state.description))
    }

    handleReset() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader title='Tarefas' subtitle='Cadastros...'/>
                <TodoForm description={this.state.description} 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch}
                    handleReset={this.handleReset}/>
                <TodoList
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} 
                    handleRemove={this.handleRemove} list={this.state.list}/>
            </div>
        )
    }
}
