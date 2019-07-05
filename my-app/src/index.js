import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// история
import {createStore, bindActionCreators} from 'redux';
import reducer from './service/reducer'
// для прокидывания стора в другие компоненты
import {Provider} from 'react-redux';
import * as actions from "./service/actions";

// хранилище данных
const store = createStore(reducer);
const {dispatch} = store;

const {getGitUserList} = bindActionCreators(actions, dispatch);

// Provider - работает как store.subscribe. Тобишь следит за обновление store
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
