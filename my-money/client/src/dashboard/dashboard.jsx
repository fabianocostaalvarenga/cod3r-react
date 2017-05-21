import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getSummary } from './dashboardAction'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {   
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
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

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)