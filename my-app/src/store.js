// история
import {createStore} from 'redux';
import rootReducer from './service/reducers'
// для прокидывания стора в другие компоненты

// хранилище данных
const store = createStore(rootReducer);

export default store;