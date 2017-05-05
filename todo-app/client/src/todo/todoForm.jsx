import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todForm">

            <Grid cols='12 9 10'>
                <input type="text" className="form-control" id="tarefa" aria-describedby="tarefaHelp" 
                        placeholder="Digite a tarefa"
                        onChange={props.handleChange}
                        value={props.description}>
                </input>
                <small id="tarefaHelp" className="form-text text-muted"> Descreva a tarefa que deverá ser realizada.</small>
            </Grid>

            <Grid cols='12 3 2'>    
                <IconButton onClick={props.handleAdd} style="primary" icon="plus" />
            </Grid>        
    </div>
)