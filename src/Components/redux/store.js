/* import  { createStore } from "redux":

function reducer(state) { return state;}

const initialState = {
    values : []
}

const store = createStore(reducer, initialState)

export default store */

import { createStore, combineReducers } from 'redux';
import submittedValueReducer from './reducers/submittedValueReducer';

const allReducers = combineReducers({
    submittedValue: submittedValueReducer
});

export const store = createStore(
    allReducers,
    {
        submittedValue: ')sdrawkcaB ti daeR () ( Nothing has been submitted yet'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
