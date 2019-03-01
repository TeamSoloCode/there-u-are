import User from '../models/User'
import LoginInfo from './../models/LoginInfo';

export interface StateType {
    user: User,
    loginInfo: LoginInfo
}