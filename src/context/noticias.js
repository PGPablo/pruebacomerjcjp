import React from 'react';

import { watchNoticias } from '../services/firebase'


export const NoticiasContext = React.createContext()

export class NoticiasContextProvider extends React.Component {
    state = {
        noticias: [],

    }

    componentDidMount() {
        if (!this.isSetUp) {
            this.isSetUp = true
            watchNoticias((noticias) => {
                this.setState({ noticias })
            })
        }

    }

    render() {
        return (
            <NoticiasContext.Provider value={this.state} >
                {this.props.children}
            </NoticiasContext.Provider>
        )
    }
}