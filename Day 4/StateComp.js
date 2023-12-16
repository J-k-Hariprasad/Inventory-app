import React, { Component } from "react";
class StateClassCom extends Component
{
    state=
    {
        color:"red",price:1234
    }
    handleChange=()=>{this.setState({color:"blue"})}
    render()
    {
        return(
            <div>

            <h1>The color i have select {this.state.color} the price is {this.state.price}</h1>
            <button onClick={this.handleChange}>Click Me !</button>
            </div>
        )
    }
}
export default StateClassCom;