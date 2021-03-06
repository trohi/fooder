export const Loading = () => ({
    type: 'LOADING'
})

export const LoadData = payload => ({
    type: 'LOAD_DATA',
    payload: payload
})

export const OpenSingleMeal = payload => ({
    type: 'OPEN_SINGLE_MEAL',
    payload: payload
})

export const RandomMeal = payload => ({
    type:'RANDOM_MEAL',
    payload: payload
})