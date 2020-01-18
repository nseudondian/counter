import React, { Component } from 'react';
import Conditional from './Conditional'




class MyApp extends Component {
    constructor(){
        super()
        this.state = {
            isTyping: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isTyping: false
            })
        }, 1500)
    }
    render() { 
        return (
            <div>
                <Conditional 
                    isTyping = {this.state.isTyping}
                />
            </div>
          );
    }
}
 
export default MyApp;