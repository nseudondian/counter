import React, { Component } from 'react';


class Conditional extends Component {
    
    render() {
        if(this.props.isTyping){
            return ( 
                <div>
                    <h1>Typing...</h1>
                </div>
            );

        }
           
        return(
            <div>
                <h1 style={{ color: "pink", backgroundColor: "blue"}}>hdfj dijs jsos oj </h1>
            </div>
        )
    }
}
 
export default Conditional;