import React from 'react'
import ReactDom from 'react-dom'
import { Primeiro, Segundo } from './component'

ReactDom.render(
    <div>   
        <Primeiro value="Primeiro Componente"/>
        <Segundo value="Segundo Componente"/>
    </div>
, document.getElementById('app'))

