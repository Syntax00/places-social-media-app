import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import placesReducer from './reducers/places.reducer';

const rootReducer = combineReducers({
    placesReducer,
});
let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default store;