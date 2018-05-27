//When an action creator returns a function, that function will get executed by the Redux Thunk middleware.
export function fetchRates(url){
    return function(dispatch){
        dispatch({
            type: 'FETCHING_RATES'
        })
        fetch(url)
        //res.json(), err => dispatch({type: 'ERR_RATES', payload: err}))
        .then(res => res.json())
        .then(resJSON => {
            dispatch({
                type: 'RECEIVED_RATES',
                payload: resJSON
            })
        })
        .catch((err) => {
            dispatch({
                type: 'ERR_RATES',
                payload: err.message || 'Something went wrong'
            })
        })
    }
}

export function fetchNames(url){
    return function(dispatch){
        dispatch({
            type: 'FETCHING_NAMES',
        })
        fetch(url)
        //res.json(), err => dispatch({type: 'ERR_NAMES', payload: err}))
        .then(res => res.json())
        .then(resJSON => {
            dispatch({
                type: 'RECEIVED_NAMES',
                payload: resJSON
            })
        })
        .catch((err) => {
            dispatch({
                type: 'ERR_NAMES',
                payload: err.message || 'Something went wrong'
            })
        })
    }
}

export function swapName() {
    return ({
        type: 'SWAP_NAME'
    })
}

export function swapRate() {
    return ({
        type: 'SWAP_RATE'
    })
}


export function updValuesOnSelect1(e) {
    return ({
        type: 'UPD_VAL_ON_SELECT_1',
        payload: {
            selectedRates1: e
        }
    })
}

export function updValuesOnSelect2(e) {
    return ({
        type: 'UPD_VAL_ON_SELECT_2',
        payload: {
            selectedRates2: e
        }
    })
}

export function updValue1(e) {
    return ({
        type: 'UPD_VAL_ON_INPUT_1',
        payload: {
            inputValue1: e.target.value
        }
    })
}

export function updValue2(e) {
    return ({
        type: 'UPD_VAL_ON_INPUT_2',
        payload: {
            inputValue2: e.target.value
        }
    })
}

export function updSelectedValue2(e) {
    return ({
        type: 'UPD_SELECTED_VAL_2',
        payload: {
            selectedValue2: e.target.value
        }
    })
}

export function updSelectedValue1(e) {
    return ({
        type: 'UPD_SELECTED_VAL_1',
        payload: {
            selectedValue1: e.target.value
        }
    })
}

export function resetButton(){
    return ({
        type: 'RESET_VALUES'
    })
}

export function errRate(){
    return ({
        type: 'ERR_RATES'
    })
}
export function errName(){
    return ({
        type: 'ERR_NAMES'
    })
}