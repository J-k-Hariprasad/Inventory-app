import React from "react";
import { connect } from "react-redux";
import { incrementAsync } from "./actions";


const CounterComponent=({counter,incrementAsync})=>
{
    return(
        <div>
            <p>Counter: {counter}</p>
           <button onClick={incrementAsync}>incrementAsync</button>
        </div>
    )
}

const mapStateProps =(state)=>
{
    return{
        counter:state.counter
    }
}
export default connect(mapStateProps,{incrementAsync})(CounterComponent);