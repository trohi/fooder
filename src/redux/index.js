import { createStore } from 'redux'

const initialState = {
    loading:false,
    data:[]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            let clone = Object.assign({}, state,{
                loading: !state.loading
            })
            console.log(clone.loading)
            return clone
    }
}

export const store = createStore(reducer)