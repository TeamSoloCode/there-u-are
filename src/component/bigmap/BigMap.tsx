import * as React from 'react';
import { connect } from 'react-redux'
 import { Dispatch } from 'redux'
// import { State } from '../../reducers/index'
import { increaseValue , Increment } from '../../action/login'
import store from '../../store/index'
import './BigMap.css'

interface Props{
    greeting: { a : string, b : number}
}

interface PropsFromDispatch {
    increase () : Increment
}

const mapDispatchToProps = (dispatch : Dispatch) => ({ 
    increase: () => dispatch(increaseValue())
})

type AllProps = Props & PropsFromDispatch

class BigMap extends React.Component<AllProps>{

    render() {
        // const unsubscribe: Unsubscribe = store.subscribe(() => {
        //     console.log('Current state:', store.getState())
        // })
        let counter : number =  store.getState().login.value;

        store.subscribe(() => {
            this.setState({value : store.getState().login.value})
            counter = store.getState().login.value
        });


        return(
            <div>
                <button style={{ height: 50, width: 100 }}  
                 onClick = {() => this.props.increase() } > Just Click </button>
                <p>{counter}</p>
            </div>
        );
    }
}

// const mapStateToProps = (state : State) =>{

// }

export default connect(null ,mapDispatchToProps)(BigMap)