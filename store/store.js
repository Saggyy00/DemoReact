
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getCatReducer from '../Reducers/CatReducers';
import changeValueReducer from "../Reducers/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = () => {
//     return createStore(changeValueReducer, applyMiddleware(thunk));
// };
const rootReducer = combineReducers(
    {
        changeValueReducer,
        getCatReducer
    }
);
const configureStore = () => {
    return createStore(changeValueReducer, composeEnhancers(applyMiddleware(thunk)));
};
export default configureStore;