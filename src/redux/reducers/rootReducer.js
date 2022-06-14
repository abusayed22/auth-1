import authReducer from './authReducer'
import crudReducer from './crudReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
        auth:authReducer,
        crud:crudReducer
})
export default rootReducer;