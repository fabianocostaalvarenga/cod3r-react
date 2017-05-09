import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleReset()
        }
    }

    return (
        <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input type="text" className="form-control" id="tarefa" aria-describedby="tarefaHelp" 
                            placeholder="Digite a tarefa"
                            onChange={props.handleChange}
                            onKeyUp={keyHandler}
                            value={props.description}>
                    </input>
                    <small id="tarefaHelp" className="form-text text-muted"> Descreva a tarefa que deverá ser realizada.</small>
                </Grid>

                <Grid cols='12 3 2'>    
                    <IconButton onClick={props.handleAdd} style="primary" icon="plus" />
                    <IconButton onClick={props.handleSearch} style="info" icon="search" />
                    <IconButton onClick={props.handleReset} style="default" icon="close" />
                </Grid>        
        </div>
    )
}