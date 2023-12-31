import React,{Component} from 'react'

export default class ErrorBoundary extends Component
{
    state={hasError:false}

    static getDerivedStateFromError(error)
    {
        return{hasError:true}
    }

    render()
    {
        if(this.state.hasError === true)
        {
            return <h1>Someting Went Wrong</h1>
        }
        return this.props.childern
    }
}
