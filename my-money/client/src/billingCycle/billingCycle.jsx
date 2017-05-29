import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import { selectTab, showTabs, hideTabs } from '../common/tab/tabActions'

import List from './billingCycleList'
import Form from './billingCycleForm'
import { create, update, remove } from './billingCycleActions'

class BillingCycle extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
        //this.props.hideTabs('tabUpdate', 'tabDelete')
    }

    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>   
                    <Tabs>
                        <TabsHeader>    
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'  />
                            <TabHeader label='Excluir' icon='trash-0' target='tabDelete'   />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />  
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={ this.props.create } btnLabel='Cancelar' btnSubmitLabel='Incluir'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                 <Form onSubmit={ this.props.update } btnLabel='Cancelar' btnSubmitLabel='Alterar'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={ this.props.remove } readOnly={true} btnLabel='Cancelar' btnSubmitLabel='Excluir'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, update, remove, hideTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)