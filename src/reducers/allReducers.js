import nameReducer from './nameReducer';
import rateReducer from './rateReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/*routerReducer 
any time you navigate, which can come from pressing browser buttons or navigating in your application code,
the enhanced history will first pass the new location through the Redux store and then on to React Router to update the component tree.
*/

const allReducers = combineReducers({
    nameReducer,
    rateReducer,
    routerReducer,
});

export default allReducers;