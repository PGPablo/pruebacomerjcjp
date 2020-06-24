import React from 'react';

import { watchUserChanges, watchActividades } from '../services/firebase'


export const ActividadesContext = React.createContext()

export class ActividadesContextProvider extends React.Component {
    state = {
        actividades: [],

    }

    componentDidMount() {
        if (!this.isSetUp) {
            this.isSetUp = true
            watchActividades((actividades) => {
                this.setState({ actividades })
            })
        }

    }

    render() {
        return (
            <ActividadesContext.Provider value={this.state} >
                {this.props.children}
            </ActividadesContext.Provider>
        )
    }
}