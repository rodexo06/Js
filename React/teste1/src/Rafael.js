import React, {Component} from 'react'
import User from './user';

class Rafael extends Component{
    render(){
        return  (
            <div>
            Eu sou um componente
            <User name="Rodexo"></User>
            </div>
        );
    }
}

export default Rafael