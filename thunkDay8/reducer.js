const intialState={counter:0}

export const counterReducer=(state=intialState,action)=>{
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                ...state,counter:state.counter+1
            };
            default : return state;
    }
}