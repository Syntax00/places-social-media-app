import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import placesReducer from './reducers/places.reducer';
import uiReducer from './reducers/ui.reducer';
import authReducer from './reducers/auth.reducer';

const rootReducer = combineReducers({
    placesReducer,
    uiReducer,
    authReducer,
});
let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default store;