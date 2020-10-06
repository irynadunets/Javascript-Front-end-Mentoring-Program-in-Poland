import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import initializeWebSocketsChannel from './sagas'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(initializeWebSocketsChannel, {store})

export default store;
