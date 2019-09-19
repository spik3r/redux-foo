import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUser} from "./actions/userActions";


class App extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <input onChange={this.onUpdateUser} />
                    {this.props.user}
                </header>
            </div>
        );
    }

    onUpdateUser = (event) => {
        this.props.onUpdateUser(event.target.value);
    }

}


export const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        onUpdateUser:updateUser
    }, dispatch);
};

export const mapStateToProps = (state, props) => {
    console.log(props);

    return {
        products: state.products,
        user: state.user,
        userPlusProp: `${state.user} ${props.aRandomProp}`
    }
};

// export const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//     return {}
// };

export default connect(mapStateToProps, mapActionsToProps)(App);
