import types from './types';

const initialState = {
    city: '',
    error: '',
    main: {},
    isLoading: false,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.WEATHER_REQUEST:
            return {
                ...state,
                city: '',
                error: '',
                main: {},
                isLoading: true,
            };
        case types.WEATHER_SUCCESS:
            return {
                ...state,
                main: payload.main,
                city: payload.name,
                isLoading: false,
            };
        case types.WEATHER_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
        default:
            return state;
    }
};
