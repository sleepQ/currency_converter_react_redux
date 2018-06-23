//When an action creator returns a function, that function will get executed by the Redux Thunk middleware.
export const fetchRates = url => {
    return dispatch => {
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
            .catch(err => {
                dispatch({
                    type: 'ERR_RATES',
                    payload: err.message || 'Something went wrong'
                })
            })
    }
}

export const fetchNames = url => {
    return dispatch => {
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
            .catch(err => {
                dispatch({
                    type: 'ERR_NAMES',
                    payload: err.message || 'Something went wrong'
                })
            })
    }
}

export const swapName = () => ({ type: 'SWAP_NAME' });

export const swapRate = () => ({ type: 'SWAP_RATE' });

export const updValuesOnSelect1 = e => ({
    type: 'UPD_VAL_ON_SELECT_1',
    payload: {
        selectedRates1: e
    }
});

export const updValuesOnSelect2 = e => ({
    type: 'UPD_VAL_ON_SELECT_2',
    payload: {
        selectedRates2: e
    }
});

export const updValue1 = e => ({
    type: 'UPD_VAL_ON_INPUT_1',
    payload: {
        inputValue1: e.target.value
    }
});

export const updValue2 = e => ({
    type: 'UPD_VAL_ON_INPUT_2',
    payload: {
        inputValue2: e.target.value
    }
});

export const updSelectedValue2 = e => ({
    type: 'UPD_SELECTED_VAL_2',
    payload: {
        selectedValue2: e.target.value
    }
});

export const updSelectedValue1 = e => ({
    type: 'UPD_SELECTED_VAL_1',
    payload: {
        selectedValue1: e.target.value
    }
});

export const resetButton = () => ({ type: 'RESET_VALUES' });

export const errRate = () => ({ type: 'ERR_RATES' });

export const errName = () => ({ type: 'ERR_NAMES' });
