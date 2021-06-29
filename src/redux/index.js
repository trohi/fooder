import { createStore } from 'redux'

const initialState = {
    loading:false,
    modal:false,
    data:[],
    singleMeal:[]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            let clone = Object.assign({}, state,{
                loading: !state.loading
            })
            return clone;
        case 'LOAD_DATA':
            return state = {
                ...state,
                data: [...action.payload]
            };
        case 'OPEN_SINGLE_MEAL':
            return state = {
                ...state,
                singleMeal: action.payload
            };
        case 'RANDOM_MEAL':
            return state ={
                ...state.data,
                singleMeal: action.payload
            };
        default:
            return state
    }
}

export const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())