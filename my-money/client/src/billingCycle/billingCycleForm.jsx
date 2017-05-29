import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    componentWillMount() {

    }

    render() {
        const { handleSubmit, readOnly, btnLabel, btnSubmitLabel } = this.props
        return(
            <form role='form' onSubmit={ handleSubmit } >
                <div className='box-body'>   
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>{btnSubmitLabel}</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>{btnLabel}</button>
                </div>
            </form>        
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)