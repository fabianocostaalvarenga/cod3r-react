import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {   
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0 [without redux]' />
                <Content>   
                    <Row>
                        <ValueBox cols='12 4' value={`R$ ${credit}`} 
                                text='Total de crédito' icon='bank' color='green'/>
                        <ValueBox cols='12 4' value={`R$ ${debt}`} 
                                text='Total de débito' icon='credit-card' color='red'/>
                        <ValueBox cols='12 4' value={`R$ ${credit - debt}`} 
                                text='Valor consolidado' icon='money' color='blue'/>
                    </Row>            
                </Content>
            </div>
        )
    }
}