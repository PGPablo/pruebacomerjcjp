import React from 'react';

import { watchUserChanges } from '../services/firebase'


export const AuthContext = React.createContext()

export class AuthContextProvider extends React.Component {
    state = {
        authReady: false,
        inLoggedIn: false,
        user: null
    }

    componentDidMount() {
        watchUserChanges((user) => {
            if (user) {
                this.setState({
                    authReady: true,
                    isLoggedIn: true,
                    user
                })
            } else {
                this.setState({
                    authReady: true,
                    inLoggedIn: false,
                    user: null
                })
            }
        })
    }

    render() {
        return(
            <AuthContext.Provider value= {this.state} >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}