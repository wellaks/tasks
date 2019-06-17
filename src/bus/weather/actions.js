import types from './types';
import { API_URL, API_KEY } from '../../constants';
import fetchJSON from '../../utils/fetchJson';

export const weatherActions = Object.freeze({
    getWeather: city => async dispatch => {
        try {
            dispatch({
                type: types.WEATHER_REQUEST,
            });
            const data = await fetchJSON(
                `http://${API_URL}?q=${city}&units=metric&appid=${API_KEY}`,
            );

            return dispatch({
                type: types.WEATHER_SUCCESS,
                payload: data,
            });
        } catch (e) {
            return dispatch({
                type: types.WEATHER_FAILURE,
                payload: e.message,
            });
        }
    },
});
