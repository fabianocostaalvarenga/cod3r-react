import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
import fieldReduce from './fieldReduce'

const reducers = combineReducers({
    field: fieldReduce
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Fabiano' />
    </Provider>    
, document.getElementById('app'))

