import { loadState } from '../localStorage';

const initialRateState = loadState() || {
    inputValue1: '',
    inputValue2: '',
    selectedRates1: [],
    selectedRates2: [],
    date: '',
    namesNrates: [],
    objRates: {},
    rateIsFetchin: false,
    error: ''
}

const rateReducer = (state = initialRateState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FETCHING_RATES':
            return ({ ...state, rateIsFetchin: true })

        case 'RECEIVED_RATES':
            return ({
                ...state,
                rateIsFetchin: false,
                objRates: payload,
                namesNrates: payload.rates,
                date: payload.timestamp,
                selectedRates1: Object.values(payload.rates)[0],
                selectedRates2: Object.values(payload.rates)[0],
            })
        
        case 'RESET_VALUES':
            return ({
                ...state,
                inputValue2: '',
                inputValue1: '',
            })

        case 'UPD_VAL_ON_SELECT_1':
            return ({
                ...state,
                selectedRates1: action.payload.selectedRates1,
                inputValue2: state.inputValue1 * state.selectedRates2 / action.payload.selectedRates1,
            })

        case 'UPD_VAL_ON_SELECT_2':
            return ({
                ...state,
                selectedRates2: payload.selectedRates2,
                inputValue2: state.inputValue1 * payload.selectedRates2 / state.selectedRates1,
            })

        case 'UPD_VAL_ON_INPUT_1':
            return ({
                ...state,
                inputValue1: payload.inputValue1,
                inputValue2: payload.inputValue1 * state.selectedRates2 / state.selectedRates1,
            })

        case 'UPD_VAL_ON_INPUT_2':
            return ({
                ...state,
                inputValue2: payload.inputValue2,
                inputValue1: payload.inputValue2 * state.selectedRates1 / state.selectedRates2,
            })

        case 'SWAP_RATE':
            return ({
                ...state,
                selectedRates1: state.selectedRates2,
                selectedRates2: state.selectedRates1,
                inputValue2: state.inputValue1 * state.selectedRates1 / state.selectedRates2,
            })

        case 'ERR_RATES':
            return ({ ...state, rateIsFetchin: false, error: payload })

        default:
            return state;

    }
}

export default rateReducer;