import PageReducer from './page-reducer';
import UserReducer from './user-reducer';
import { combineReducers } from 'redux';

// обьеденяем редьюсеры, для того, чтобы можно было обновлять по отдельности (производительность)

//rootReducer
export default combineReducers({
    page: PageReducer,
    user: UserReducer,
});