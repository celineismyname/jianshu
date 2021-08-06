import { fromJS } from "immutable"
import * as constants from './constants'

const defaultState = fromJS({
    login:false
})

const TODO = (state = defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('login',action.value)
        case constants.CHANGE_LOGOUT:
            return state.set('login',action.value)
    default:
        return state        
    }
}

export default TODO
