import UserReducer from './user-reducer';
import GroupReducer from './groups-reducer';
import GitReducer from './git-reducer'
import { combineReducers } from 'redux';

// Редьюсеры должны быть разделены по принципу моделей
// обьеденяем редьюсеры, для того, чтобы можно было обновлять по отдельности (производительность)

// Редьюсеры должны быть чистыми функциями, это значит что они должны только возвращать данные, без модификации.

//rootReducer
export default combineReducers({
    UserReducer,
    GroupReducer,
    GitReducer,
});