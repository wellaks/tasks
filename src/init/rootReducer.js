import { combineReducers } from 'redux';

import { weatherReducer as weather } from '../bus/weather/reducer';

export default () =>
    combineReducers({
        weather,
    });
