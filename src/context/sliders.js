import React from 'react';

import { watchSliders } from '../services/firebase'


export const SlidersContext = React.createContext()

export class SlidersContextProvider extends React.Component {
    state = {
        sliders: [],

    }

    componentDidMount() {
        if (!this.isSetUp) {
            this.isSetUp = true
            watchSliders((sliders) => {
                this.setState({ sliders })
            })
        }
    }

    render() {
        return (
            <SlidersContext.Provider value={this.state} >
                {this.props.children}
            </SlidersContext.Provider>
        )
    }
}