// история
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './service/reducers'
//усилители
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// хранилище данных
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;