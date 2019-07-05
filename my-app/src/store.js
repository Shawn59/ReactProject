// история
import {createStore} from 'redux/index';
import reducer from './service/reducer'
// для прокидывания стора в другие компоненты

// хранилище данных
const store = createStore(reducer);

export default store;