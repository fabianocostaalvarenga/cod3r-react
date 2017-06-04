import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAll, showTab } from './billingCycleActions'

import IconButton from '../common/button/iconButton'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getAll()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(billingCycle => (
            <tr key={billingCycle._id}>
                <td>{billingCycle.name}</td>
                <td>{billingCycle.month}</td>
                <td>{billingCycle.year}</td>
                <td>
                    <IconButton tema='warning' icon='pencil'
                        onClick={() => this.props.showTab(billingCycle, 'tabUpdate')} />
                    <IconButton tema='danger' icon='trash'
                        onClick={() => this.props.showTab(billingCycle, 'tabDelete')} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getAll, showTab }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)