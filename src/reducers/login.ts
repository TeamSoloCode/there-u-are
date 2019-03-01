import User from '../models/User'
import { Action, ActionEnum } from '../action/login'
/**
 * login reducers state's type of object
 */
export interface IState{
    loginInfo: {email: string, password: string}
    user : User,
    value: number
}

/**
 * Init state of login reducer
 */
 export const initialState : IState = {
    loginInfo: {email: '', password: ''},
    user : {} as User,
    value: 0
 }

 /**
  * Login reducer
  */
export function reducer( state : IState = initialState, action: Action ){
    switch(action.type){
        case ActionEnum.LOGIN_WITH_FIREBASE : {
            return {
                ...state,
                loginInfo : {
                    email: action.loginInfo.email,
                    password: action.loginInfo.password
                }
            }
        }

        case ActionEnum.INCREMENT: {
            return {
                ...state,
                value: state.value + 1
            }
        }
        
        default: return state;
    }
}