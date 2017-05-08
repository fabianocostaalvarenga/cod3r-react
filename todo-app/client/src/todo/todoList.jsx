import React from 'react'

import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map( todoItem => (
            <tr key={todoItem._id}>
                <td className={todoItem.done ? 'markedAsDone' : ''}>
                    {todoItem.description}
                </td>
                <td>
                    <IconButton style='success' icon='check' hide={todoItem.done} 
                        onClick={() => props.handleMarkAsDone(todoItem)} />
                    <IconButton style='warning' icon='undo' hide={!todoItem.done}
                        onClick={() => props.handleMarkAsPending(todoItem)} />
                    <IconButton style='danger' icon='trash-o' hide={!todoItem.done}
                        onClick={() => props.handleRemove(todoItem)} />
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>    
            </thead>
            <tbody>
                {renderRows()}
            </tbody>    
        </table>
    )
}