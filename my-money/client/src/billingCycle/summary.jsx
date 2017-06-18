import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>  
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' value={`R$ ${credit}`} 
                            text='Total de crédito' icon='bank' color='green'/>
                <ValueBox cols='12 4' value={`R$ ${debt}`} 
                            text='Total de débito' icon='credit-card' color='red'/>
                <ValueBox cols='12 4' value={`R$ ${credit - debt}`} 
                            text='Valor consolidado' icon='money' color='blue'/>
            </Row>
        </fieldset>
    </Grid>    
)