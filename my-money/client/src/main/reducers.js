import { combineReducers } from 'redux'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billinCycle: billingCycleReducer
})

export default rootReducer