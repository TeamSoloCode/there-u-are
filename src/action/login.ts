import User from '../models/User'

/**
 * We're defining every action in name constant here
 * Typescript's understand enum better
 */
export enum ActionEnum {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_FIREBASE_SUCCESSFUL,
    ANONYMOUS,
    INCREMENT
}

/**
 * Defining action type
 */
 
export interface LoginWithFirebase {
    type: ActionEnum.LOGIN_WITH_FIREBASE,
    loginInfo: { email: string, password: string}
}


export interface LoginWithFirebaseSuccessful{
    type: ActionEnum.LOGIN_WITH_FIREBASE_SUCCESSFUL,
    user: User
}

export interface LoginAnonymous {
    type: ActionEnum.ANONYMOUS,
    anonymousId: string
}

export interface Increment {
    type: ActionEnum.INCREMENT,
}

export function increaseValue() : Increment {
    return {
        type: ActionEnum.INCREMENT,
    } as Increment
}


/**
 * Action will use in login reducer
 */
export type Action = LoginWithFirebase | LoginWithFirebaseSuccessful | LoginAnonymous | Increment