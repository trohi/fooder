import { createStore } from 'redux'

const initialState = {
    loading:false,
    modal:false,
    data:[]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            let clone = Object.assign({}, state,{
                loading: !state.loading
            })
            console.log(clone.loading)
            return clone;
        case 'LOAD_DATA':
            return state = {
                ...state,
                data: [...action.payload]
            };
        default:
            return state
    }
}

export const store = createStore(reducer)