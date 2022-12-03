// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware()

const middleware = 
    process.env.NODE_ENV === "development" 
        ? composeWithDevTools(applyMiddleware(sagaMiddleware)) 
        : applyMiddleware(sagaMiddleware)

export const store = createStore(rootReducer, middleware)

sagaMiddleware.run(rootSaga);

// rest unchanged