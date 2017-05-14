import React,  { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, reset } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, reset, description } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if(e.key === 'Escape') {
            reset()
        }
    }

    render() {
        const { add, search, reset, changeDescription, description } = this.props
        return (
            <div role="form" className="todoForm">
                    <Grid cols='12 9 10'>
                        <input type="text" className="form-control" id="tarefa" aria-describedby="tarefaHelp" 
                                placeholder="Digite a tarefa"
                                onChange={changeDescription}
                                onKeyUp={this.keyHandler}
                                value={description}>
                        </input>
                        <small id="tarefaHelp" className="form-text text-muted"> Descreva a tarefa que deverá ser realizada.</small>
                    </Grid>

                    <Grid cols='12 3 2'>    
                        <IconButton onClick={() => add(description)} style="primary" icon="plus" />
                        <IconButton onClick={() => search()} style="info" icon="search" />
                        <IconButton onClick={() => reset()} style="default" icon="close" />
                    </Grid>        
            </div>
        )    
    }
}

/* Mapeia o componente para usar Store do Redux */
const mapStateToProps = state => ({description: state.todo.description})
/* Mapeia e linca meu evento 'changeDescription' e o entrega para o dispatch do Redux para manipula-lo*/
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, reset }, dispatch)
/* Conectar o componente ao Redux e exporta-lo para ser usado */
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)