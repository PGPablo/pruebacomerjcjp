import React from 'react'
import {AuthContext} from '../../context/auth'


class Root extends React.Component{
    render(){
        const {
            children,
        } = this.props
        const {
            authReady
        } = this.context
        
        if(!authReady){
            return <div className="container border shadow mt-6 mb-6">Cargando, un momento porfavor...</div>
        }
        return( children )
    }
}

Root.contextType = AuthContext
export default Root