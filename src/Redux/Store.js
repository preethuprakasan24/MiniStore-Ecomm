// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import productSaga from './productSaga';

const sagaMiddleware = createSagaMiddleware() //The code creates an instance of the Saga middleware using createSagaMiddleware().
const Store = configureStore({
    reducer: rootReducer,
    middleware: () =>
        [sagaMiddleware]
})
sagaMiddleware.run(productSaga)
// const Store = createStore(rootReducer)
console.log("storeeeeeeeee")
export default Store