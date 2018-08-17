import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

export const configureStore = (initialState = {}) => {

    const middlewares = [thunk];

    const appliedMiddlewares = [applyMiddleware(...middlewares)];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancers = composeEnhancers(...appliedMiddlewares);

    return createStore(rootReducer, initialState, enhancers);
};
