import { createLogger } from 'redux-logger';
import allReducers from './reducers/allReducers'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { fetchRates, fetchNames } from './actions/actionCreators';
import { saveState } from './localStorage';
// import middleware from './middleware/middleware';
//action undefined solved by applymidware order(thunk first)

//cant use initial state if ure combining reducers in createStore

//ReduxDevTools
//import { composeWithDevTools } from 'redux-devtools-extension';
//const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
const ratesURL = 'https://openexchangerates.org/api/latest.json?app_id=367769e2d8204e40a9e3ddc894a88205';
const namesURL = 'https://openexchangerates.org/api/currencies.json';
const middleware = applyMiddleware( thunk, createLogger() );

const store = createStore(allReducers, middleware);

export function loadStorage(item){
    return localStorage.getItem(item);
}

export function setStorage(item, payload){
    return localStorage.setItem(item, payload);
}

function getStates(){
    return store.getState();
}

if( !loadStorage('obj') || !loadStorage('selectValues') 
    || !loadStorage('selectedValue1') || !loadStorage('selectedValue2')
    || !loadStorage('namesNrates') || !loadStorage('date') 
    || !loadStorage('selectedRates1') || !loadStorage('selectedRates2') 
    || !loadStorage('objRates') ){
    store.dispatch(fetchNames(namesURL));
    store.dispatch(fetchRates(ratesURL));
}

store.subscribe(throttle(() => {
    saveState({
        obj: getStates().nameReducer.obj,
        selectValues: getStates().nameReducer.selectValues,
        selectedValue1: getStates().nameReducer.selectedValue1,
        selectedValue2: getStates().nameReducer.selectedValue2,
        namesNrates: getStates().rateReducer.namesNrates,
        date: getStates().rateReducer.date,
        selectedRates1: getStates().rateReducer.selectedRates1,
        selectedRates2: getStates().rateReducer.selectedRates2,
        objRates: getStates().rateReducer.objRates,
    });
},1000));

export default store;