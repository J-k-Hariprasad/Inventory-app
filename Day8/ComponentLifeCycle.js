import React, { Component } from "react";

export default class ComponentLifeCycle extends Component
{
    constructor(props)
    {
        super(props);
        this.state={favColor:"Blue"}
    }


    shouldComponentUpdate()
    {
        return true
    }
    getSnapshotBeforeUpdate(pre,next)
    {
        document.getElementById("id1").innerHTML="Previous Value  " +next.favColor;
    }
    componentDidUpdate()
    {
        document.getElementById("id2").innerHTML="Current Value  "+this.state.favColor;
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({favColor:"Red"})},5000)
    }
    render()
    {
        return(
            <div>
                <h1>My Favorite Colour {this.state.favColor}</h1>
                <p id="id1"/> 
                <p id="id2"/> 
            </div>
        )
    }
}