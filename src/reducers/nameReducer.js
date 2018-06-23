import { loadState } from '../localStorage';

const initialNameState = loadState() || {
    selectValues: [],
    selectedValue1: {},
    selectedValue2: {},
    obj: {},
    nameIsFetchin: false,
    error: ''
}

const nameReducer = (state = initialNameState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FETCHING_NAMES':
            return ({ ...state, nameIsFetchin: true })

        case 'RECEIVED_NAMES':
            return ({
                ...state,
                nameIsFetchin: false,
                obj: payload,
                selectValues: Object.keys(payload),
                selectedValue1: Object.keys(payload)[0],
                selectedValue2: Object.keys(payload)[0],
            })

        case 'SWAP_NAME':
            return ({
                ...state,
                selectedValue2: state.selectedValue1,
                selectedValue1: state.selectedValue2,
            })

        case 'UPD_SELECTED_VAL_1':
            return ({
                ...state,
                selectedValue1: payload.selectedValue1,
            })

        case 'UPD_SELECTED_VAL_2':
            return ({
                ...state,
                selectedValue2: payload.selectedValue2,
            })

        case 'ERR_NAMES':
            return ({ ...state, nameIsFetchin: false, error: payload })

        default:
            return state;

    }
}

export default nameReducer;