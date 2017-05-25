import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAll } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <h1>Lista</h1>
        )
    }
}

const mapStateToProps = state => ({ list: state.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getAll }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)